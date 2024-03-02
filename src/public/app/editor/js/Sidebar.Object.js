import * as THREE from 'three';

import {
    UIPanel,
    UIRow,
    UIInput,
    UIButton,
    UIColor,
    UICheckbox,
    UIInteger,
    UITextArea,
    UIText,
    UINumber
} from './libs/ui.js';
import {
    UIBoolean
} from './libs/ui.three.js';

import {
    SetUuidCommand
} from './commands/SetUuidCommand.js';
import {
    SetValueCommand
} from './commands/SetValueCommand.js';
import {
    SetPositionCommand
} from './commands/SetPositionCommand.js';
import {
    SetRotationCommand
} from './commands/SetRotationCommand.js';
import {
    SetScaleCommand
} from './commands/SetScaleCommand.js';
import {
    SetColorCommand
} from './commands/SetColorCommand.js';

function SidebarObject(editor) {

    const strings = editor.strings;

    const signals = editor.signals;

    const container = new UIPanel();
    container.setBorderTop('0');
    container.setPaddingTop('20px');
    container.setDisplay('none');

    // Actions

    /*
    let objectActions = new UI.Select().setPosition( 'absolute' ).setRight( '8px' ).setFontSize( '11px' );
    objectActions.setOptions( {

        'Actions': 'Actions',
        'Reset Position': 'Reset Position',
        'Reset Rotation': 'Reset Rotation',
        'Reset Scale': 'Reset Scale'

    } );
    objectActions.onClick( function ( event ) {

        event.stopPropagation(); // Avoid panel collapsing

    } );
    objectActions.onChange( function ( event ) {

        let object = editor.selected;

        switch ( this.getValue() ) {

            case 'Reset Position':
                editor.execute( new SetPositionCommand( editor, object, new Vector3( 0, 0, 0 ) ) );
                break;

            case 'Reset Rotation':
                editor.execute( new SetRotationCommand( editor, object, new Euler( 0, 0, 0 ) ) );
                break;

            case 'Reset Scale':
                editor.execute( new SetScaleCommand( editor, object, new Vector3( 1, 1, 1 ) ) );
                break;

        }

        this.setValue( 'Actions' );

    } );
    container.addStatic( objectActions );
    */

    // type

    const objectTypeRow = new UIRow();
    const objectType = new UIText();

    objectTypeRow.add(new UIText(strings.getKey('sidebar/object/type')).setWidth('90px'));
    objectTypeRow.add(objectType);

    container.add(objectTypeRow);

    // uuid

    const objectUUIDRow = new UIRow();
    const objectUUID = new UIInput().setWidth('102px').setFontSize('12px').setDisabled(true);
    const objectUUIDRenew = new UIButton(strings.getKey('sidebar/object/new')).setMarginLeft('7px').onClick(function() {

        objectUUID.setValue(THREE.MathUtils.generateUUID());

        editor.execute(new SetUuidCommand(editor, editor.selected, objectUUID.getValue()));

    });

    objectUUIDRow.add(new UIText(strings.getKey('sidebar/object/uuid')).setWidth('90px'));
    objectUUIDRow.add(objectUUID);
    objectUUIDRow.add(objectUUIDRenew);

    container.add(objectUUIDRow);

    // name

    const objectNameRow = new UIRow();
    const objectName = new UIInput().setWidth('150px').setFontSize('12px').onChange(function() {

        editor.execute(new SetValueCommand(editor, editor.selected, 'name', objectName.getValue()));

    });

    objectNameRow.add(new UIText(strings.getKey('sidebar/object/name')).setWidth('90px'));
    objectNameRow.add(objectName);

    container.add(objectNameRow);

    // position

    const objectPositionRow = new UIRow();
    const objectPositionX = new UINumber().setPrecision(3).setWidth('50px').onChange(update);
    const objectPositionY = new UINumber().setPrecision(3).setWidth('50px').onChange(update);
    const objectPositionZ = new UINumber().setPrecision(3).setWidth('50px').onChange(update);

    objectPositionRow.add(new UIText(strings.getKey('sidebar/object/position')).setWidth('90px'));
    objectPositionRow.add(objectPositionX, objectPositionY, objectPositionZ);

    container.add(objectPositionRow);

    // rotation

    const objectRotationRow = new UIRow();
    const objectRotationX = new UINumber().setStep(10).setNudge(0.1).setUnit('°').setWidth('50px').onChange(update);
    const objectRotationY = new UINumber().setStep(10).setNudge(0.1).setUnit('°').setWidth('50px').onChange(update);
    const objectRotationZ = new UINumber().setStep(10).setNudge(0.1).setUnit('°').setWidth('50px').onChange(update);

    objectRotationRow.add(new UIText(strings.getKey('sidebar/object/rotation')).setWidth('90px'));
    objectRotationRow.add(objectRotationX, objectRotationY, objectRotationZ);

    container.add(objectRotationRow);

    // scale

    const objectScaleRow = new UIRow();
    const objectScaleX = new UINumber(1).setPrecision(3).setWidth('50px').onChange(updateScaleX);
    const objectScaleY = new UINumber(1).setPrecision(3).setWidth('50px').onChange(updateScaleY);
    const objectScaleZ = new UINumber(1).setPrecision(3).setWidth('50px').onChange(updateScaleZ);

    objectScaleRow.add(new UIText(strings.getKey('sidebar/object/scale')).setWidth('90px'));
    objectScaleRow.add(objectScaleX, objectScaleY, objectScaleZ);

    container.add(objectScaleRow);

    // fov

    const objectFovRow = new UIRow();
    const objectFov = new UINumber().onChange(update);

    objectFovRow.add(new UIText(strings.getKey('sidebar/object/fov')).setWidth('90px'));
    objectFovRow.add(objectFov);

    container.add(objectFovRow);

    // left

    const objectLeftRow = new UIRow();
    const objectLeft = new UINumber().onChange(update);

    objectLeftRow.add(new UIText(strings.getKey('sidebar/object/left')).setWidth('90px'));
    objectLeftRow.add(objectLeft);

    container.add(objectLeftRow);

    // right

    const objectRightRow = new UIRow();
    const objectRight = new UINumber().onChange(update);

    objectRightRow.add(new UIText(strings.getKey('sidebar/object/right')).setWidth('90px'));
    objectRightRow.add(objectRight);

    container.add(objectRightRow);

    // top

    const objectTopRow = new UIRow();
    const objectTop = new UINumber().onChange(update);

    objectTopRow.add(new UIText(strings.getKey('sidebar/object/top')).setWidth('90px'));
    objectTopRow.add(objectTop);

    container.add(objectTopRow);

    // bottom

    const objectBottomRow = new UIRow();
    const objectBottom = new UINumber().onChange(update);

    objectBottomRow.add(new UIText(strings.getKey('sidebar/object/bottom')).setWidth('90px'));
    objectBottomRow.add(objectBottom);

    container.add(objectBottomRow);

    // near

    const objectNearRow = new UIRow();
    const objectNear = new UINumber().onChange(update);

    objectNearRow.add(new UIText(strings.getKey('sidebar/object/near')).setWidth('90px'));
    objectNearRow.add(objectNear);

    container.add(objectNearRow);

    // far

    const objectFarRow = new UIRow();
    const objectFar = new UINumber().onChange(update);

    objectFarRow.add(new UIText(strings.getKey('sidebar/object/far')).setWidth('90px'));
    objectFarRow.add(objectFar);

    container.add(objectFarRow);

    // intensity

    const objectIntensityRow = new UIRow();
    const objectIntensity = new UINumber().onChange(update);

    objectIntensityRow.add(new UIText(strings.getKey('sidebar/object/intensity')).setWidth('90px'));
    objectIntensityRow.add(objectIntensity);

    container.add(objectIntensityRow);

    // color

    const objectColorRow = new UIRow();
    const objectColor = new UIColor().onInput(update);

    objectColorRow.add(new UIText(strings.getKey('sidebar/object/color')).setWidth('90px'));
    objectColorRow.add(objectColor);

    container.add(objectColorRow);

    // ground color

    const objectGroundColorRow = new UIRow();
    const objectGroundColor = new UIColor().onInput(update);

    objectGroundColorRow.add(new UIText(strings.getKey('sidebar/object/groundcolor')).setWidth('90px'));
    objectGroundColorRow.add(objectGroundColor);

    container.add(objectGroundColorRow);

    // distance

    const objectDistanceRow = new UIRow();
    const objectDistance = new UINumber().setRange(0, Infinity).onChange(update);

    objectDistanceRow.add(new UIText(strings.getKey('sidebar/object/distance')).setWidth('90px'));
    objectDistanceRow.add(objectDistance);

    container.add(objectDistanceRow);

    // angle

    const objectAngleRow = new UIRow();
    const objectAngle = new UINumber().setPrecision(3).setRange(0, Math.PI / 2).onChange(update);

    objectAngleRow.add(new UIText(strings.getKey('sidebar/object/angle')).setWidth('90px'));
    objectAngleRow.add(objectAngle);

    container.add(objectAngleRow);

    // penumbra

    const objectPenumbraRow = new UIRow();
    const objectPenumbra = new UINumber().setRange(0, 1).onChange(update);

    objectPenumbraRow.add(new UIText(strings.getKey('sidebar/object/penumbra')).setWidth('90px'));
    objectPenumbraRow.add(objectPenumbra);

    container.add(objectPenumbraRow);

    // decay

    const objectDecayRow = new UIRow();
    const objectDecay = new UINumber().setRange(0, Infinity).onChange(update);

    objectDecayRow.add(new UIText(strings.getKey('sidebar/object/decay')).setWidth('90px'));
    objectDecayRow.add(objectDecay);

    container.add(objectDecayRow);

    // shadow

    const objectShadowRow = new UIRow();

    objectShadowRow.add(new UIText(strings.getKey('sidebar/object/shadow')).setWidth('90px'));

    const objectCastShadow = new UIBoolean(false, strings.getKey('sidebar/object/cast')).onChange(update);
    objectShadowRow.add(objectCastShadow);

    const objectReceiveShadow = new UIBoolean(false, strings.getKey('sidebar/object/receive')).onChange(update);
    objectShadowRow.add(objectReceiveShadow);

    container.add(objectShadowRow);

    // shadow bias

    const objectShadowBiasRow = new UIRow();

    objectShadowBiasRow.add(new UIText(strings.getKey('sidebar/object/shadowBias')).setWidth('90px'));

    const objectShadowBias = new UINumber(0).setPrecision(5).setStep(0.0001).setNudge(0.00001).onChange(update);
    objectShadowBiasRow.add(objectShadowBias);

    container.add(objectShadowBiasRow);

    // shadow normal offset

    const objectShadowNormalBiasRow = new UIRow();

    objectShadowNormalBiasRow.add(new UIText(strings.getKey('sidebar/object/shadowNormalBias')).setWidth('90px'));

    const objectShadowNormalBias = new UINumber(0).onChange(update);
    objectShadowNormalBiasRow.add(objectShadowNormalBias);

    container.add(objectShadowNormalBiasRow);

    // shadow radius

    const objectShadowRadiusRow = new UIRow();

    objectShadowRadiusRow.add(new UIText(strings.getKey('sidebar/object/shadowRadius')).setWidth('90px'));

    const objectShadowRadius = new UINumber(1).onChange(update);
    objectShadowRadiusRow.add(objectShadowRadius);

    container.add(objectShadowRadiusRow);

    // visible

    const objectVisibleRow = new UIRow();
    const objectVisible = new UICheckbox().onChange(update);

    objectVisibleRow.add(new UIText(strings.getKey('sidebar/object/visible')).setWidth('90px'));
    objectVisibleRow.add(objectVisible);

    container.add(objectVisibleRow);

    // frustumCulled

    const objectFrustumCulledRow = new UIRow();
    const objectFrustumCulled = new UICheckbox().onChange(update);

    objectFrustumCulledRow.add(new UIText(strings.getKey('sidebar/object/frustumcull')).setWidth('90px'));
    objectFrustumCulledRow.add(objectFrustumCulled);

    container.add(objectFrustumCulledRow);

    // renderOrder

    const objectRenderOrderRow = new UIRow();
    const objectRenderOrder = new UIInteger().setWidth('50px').onChange(update);

    objectRenderOrderRow.add(new UIText(strings.getKey('sidebar/object/renderorder')).setWidth('90px'));
    objectRenderOrderRow.add(objectRenderOrder);

    container.add(objectRenderOrderRow);

    // user data

    const objectUserDataRow = new UIRow();
    const objectUserData = new UITextArea().setWidth('150px').setHeight('40px').setFontSize('12px').onChange(update);
    objectUserData.onKeyUp(function() {

        try {

            JSON.parse(objectUserData.getValue());

            objectUserData.dom.classList.add('success');
            objectUserData.dom.classList.remove('fail');

        } catch (error) {

            objectUserData.dom.classList.remove('success');
            objectUserData.dom.classList.add('fail');

        }

    });

    objectUserDataRow.add(new UIText(strings.getKey('sidebar/object/userdata')).setWidth('90px'));
    objectUserDataRow.add(objectUserData);

    container.add(objectUserDataRow);


    //

    function update() {

        const object = editor.selected;
        console.log(object.children)

        if (object !== null) {

            const newPosition = new THREE.Vector3(objectPositionX.getValue(), objectPositionY.getValue(), objectPositionZ.getValue());
            if (object.position.distanceTo(newPosition) >= 0.01) {

                editor.execute(new SetPositionCommand(editor, object, newPosition));

            }

            const newRotation = new THREE.Euler(objectRotationX.getValue() * THREE.MathUtils.DEG2RAD, objectRotationY.getValue() * THREE.MathUtils.DEG2RAD, objectRotationZ.getValue() * THREE.MathUtils.DEG2RAD);
            if (new THREE.Vector3().setFromEuler(object.rotation).distanceTo(new THREE.Vector3().setFromEuler(newRotation)) >= 0.01) {

                editor.execute(new SetRotationCommand(editor, object, newRotation));

            }

            const newScale = new THREE.Vector3(objectScaleX.getValue(), objectScaleY.getValue(), objectScaleZ.getValue());
            if (object.scale.distanceTo(newScale) >= 0.01) {

                editor.execute(new SetScaleCommand(editor, object, newScale));

            }

            if (object.fov !== undefined && Math.abs(object.fov - objectFov.getValue()) >= 0.01) {

                editor.execute(new SetValueCommand(editor, object, 'fov', objectFov.getValue()));
                object.updateProjectionMatrix();

            }

            if (object.left !== undefined && Math.abs(object.left - objectLeft.getValue()) >= 0.01) {

                editor.execute(new SetValueCommand(editor, object, 'left', objectLeft.getValue()));
                object.updateProjectionMatrix();

            }

            if (object.right !== undefined && Math.abs(object.right - objectRight.getValue()) >= 0.01) {

                editor.execute(new SetValueCommand(editor, object, 'right', objectRight.getValue()));
                object.updateProjectionMatrix();

            }

            if (object.top !== undefined && Math.abs(object.top - objectTop.getValue()) >= 0.01) {

                editor.execute(new SetValueCommand(editor, object, 'top', objectTop.getValue()));
                object.updateProjectionMatrix();

            }

            if (object.bottom !== undefined && Math.abs(object.bottom - objectBottom.getValue()) >= 0.01) {

                editor.execute(new SetValueCommand(editor, object, 'bottom', objectBottom.getValue()));
                object.updateProjectionMatrix();

            }

            if (object.near !== undefined && Math.abs(object.near - objectNear.getValue()) >= 0.01) {

                editor.execute(new SetValueCommand(editor, object, 'near', objectNear.getValue()));
                if (object.isOrthographicCamera) {

                    object.updateProjectionMatrix();

                }

            }

            if (object.far !== undefined && Math.abs(object.far - objectFar.getValue()) >= 0.01) {

                editor.execute(new SetValueCommand(editor, object, 'far', objectFar.getValue()));
                if (object.isOrthographicCamera) {

                    object.updateProjectionMatrix();

                }

            }

            if (object.intensity !== undefined && Math.abs(object.intensity - objectIntensity.getValue()) >= 0.01) {

                editor.execute(new SetValueCommand(editor, object, 'intensity', objectIntensity.getValue()));

            }

            if (object.color !== undefined && object.color.getHex() !== objectColor.getHexValue()) {

                editor.execute(new SetColorCommand(editor, object, 'color', objectColor.getHexValue()));

            }

            if (object.groundColor !== undefined && object.groundColor.getHex() !== objectGroundColor.getHexValue()) {

                editor.execute(new SetColorCommand(editor, object, 'groundColor', objectGroundColor.getHexValue()));

            }

            if (object.distance !== undefined && Math.abs(object.distance - objectDistance.getValue()) >= 0.01) {

                editor.execute(new SetValueCommand(editor, object, 'distance', objectDistance.getValue()));

            }

            if (object.angle !== undefined && Math.abs(object.angle - objectAngle.getValue()) >= 0.01) {

                editor.execute(new SetValueCommand(editor, object, 'angle', objectAngle.getValue()));

            }

            if (object.penumbra !== undefined && Math.abs(object.penumbra - objectPenumbra.getValue()) >= 0.01) {

                editor.execute(new SetValueCommand(editor, object, 'penumbra', objectPenumbra.getValue()));

            }

            if (object.decay !== undefined && Math.abs(object.decay - objectDecay.getValue()) >= 0.01) {

                editor.execute(new SetValueCommand(editor, object, 'decay', objectDecay.getValue()));

            }

            if (object.visible !== objectVisible.getValue()) {

                editor.execute(new SetValueCommand(editor, object, 'visible', objectVisible.getValue()));

            }

            if (object.frustumCulled !== objectFrustumCulled.getValue()) {

                editor.execute(new SetValueCommand(editor, object, 'frustumCulled', objectFrustumCulled.getValue()));

            }

            if (object.renderOrder !== objectRenderOrder.getValue()) {

                editor.execute(new SetValueCommand(editor, object, 'renderOrder', objectRenderOrder.getValue()));

            }

            if (object.castShadow !== undefined && object.castShadow !== objectCastShadow.getValue()) {

                editor.execute(new SetValueCommand(editor, object, 'castShadow', objectCastShadow.getValue()));

            }

            if (object.receiveShadow !== objectReceiveShadow.getValue()) {

                if (object.material !== undefined) object.material.needsUpdate = true;
                editor.execute(new SetValueCommand(editor, object, 'receiveShadow', objectReceiveShadow.getValue()));

            }

            if (object.shadow !== undefined) {

                if (object.shadow.bias !== objectShadowBias.getValue()) {

                    editor.execute(new SetValueCommand(editor, object.shadow, 'bias', objectShadowBias.getValue()));

                }

                if (object.shadow.normalBias !== objectShadowNormalBias.getValue()) {

                    editor.execute(new SetValueCommand(editor, object.shadow, 'normalBias', objectShadowNormalBias.getValue()));

                }

                if (object.shadow.radius !== objectShadowRadius.getValue()) {

                    editor.execute(new SetValueCommand(editor, object.shadow, 'radius', objectShadowRadius.getValue()));

                }

            }

            try {

                const userData = JSON.parse(objectUserData.getValue());
                if (JSON.stringify(object.userData) != JSON.stringify(userData)) {

                    editor.execute(new SetValueCommand(editor, object, 'userData', userData));

                }

            } catch (exception) {

                console.warn(exception);

            }

        }

    }
    function updateScaleX() {
        let object = editor.selected;

        

        if (object !== null) {
            const newScale = new THREE.Vector3(objectScaleX.getValue(), 1, 1);


            if (object.scale.distanceTo(newScale) >= 0.01) {
                for (let i = 0; i < object.children.length; i++) {
                    const newPosition2 = new THREE.Vector3(objectScaleX.getValue()*5,object.children[i].position.y, object.children[i].position.z);
    
                    //Main Panel
                    if (object.children[i].name === "main9" ||
                        object.children[i].name === "main10" ||
                        object.children[i].name === "main11" ||
                        object.children[i].name === "main12"||
                        object.children[i].name === "main21"||
                        object.children[i].name === "main22" 
                        

                        ) {
                    
                            editor.execute(new SetScaleCommand(editor, object.children[i], newScale));
                            editor.execute(new SetPositionCommand(editor, object.children[i], newPosition2));

                            //Changes position
                    }else if 
                    (object.children[i].name === "main3" ||
                    object.children[i].name === "main4" ||
                    object.children[i].name === "main5" ||
                    object.children[i].name === "main7" ||
                    object.children[i].name === "main13" ||
                    object.children[i].name === "main17" ||
                    object.children[i].name === "main15" ||
                    object.children[i].name === "main19" ||
                    object.children[i].name === "main23"

                    ) {
                        const newPosition = new THREE.Vector3(objectScaleX.getValue()*10,object.children[i].position.y, object.children[i].position.z);

                    
                        editor.execute(new SetPositionCommand(editor, object.children[i], newPosition ));

                    
                    
                    
                }
                //Door
                
                else if  
                (object.children[i].name === "Door" ) {
                    const newScale = new THREE.Vector3(objectScaleX.getValue(), object.children[i].scale.y,object.children[i].scale.z);
                     const newPosition2 = new THREE.Vector3(objectScaleX.getValue()*5,object.children[i].position.y, object.children[i].position.z);

                    editor.execute(new SetScaleCommand(editor, object.children[i], newScale));
                    editor.execute(new SetPositionCommand(editor, object.children[i], newPosition2));
               }
               else if(object.children[i].name === "door4" ){

                const newPosition2 = new THREE.Vector3(objectScaleX.getValue()*9.5,object.children[i].position.y, object.children[i].position.z);

                editor.execute(new SetPositionCommand(editor, object.children[i], newPosition2));


               }

               //Glass Door

               else if  
                (object.children[i].name === "doorG3" ||
                object.children[i].name === "doorG4" 
                
                 ) {
                    const newScale = new THREE.Vector3(objectScaleX.getValue(), object.children[i].scale.y,object.children[i].scale.z);
                     const newPosition2 = new THREE.Vector3(objectScaleX.getValue()*5.42,object.children[i].position.y, object.children[i].position.z);

                    editor.execute(new SetScaleCommand(editor, object.children[i], newScale));
                    editor.execute(new SetPositionCommand(editor, object.children[i], newPosition2));
               }else if(object.children[i].name === "doorG5"){
                const newScale = new THREE.Vector3(objectScaleX.getValue()*1.08, object.children[i].scale.y,object.children[i].scale.z);

                const newPosition2 = new THREE.Vector3(objectScaleX.getValue()*5.4,object.children[i].position.y, object.children[i].position.z);

                editor.execute(new SetScaleCommand(editor, object.children[i], newScale));
                editor.execute(new SetPositionCommand(editor, object.children[i], newPosition2));

               }
               else if(object.children[i].name === "doorG1" ||
               object.children[i].name === "doorG8" 
               ){

                const newPosition2 = new THREE.Vector3(objectScaleX.getValue()*10.8,object.children[i].position.y, object.children[i].position.z);

                editor.execute(new SetPositionCommand(editor, object.children[i], newPosition2));


               }
               //Adject Door
               else if  
               (object.children[i].name === "doorA1" ||
               object.children[i].name === "doorA2"
                ) {
                   const newScale = new THREE.Vector3(objectScaleX.getValue(), object.children[i].scale.y,object.children[i].scale.z);
                    const newPosition2 = new THREE.Vector3(objectScaleX.getValue()*5,object.children[i].position.y, object.children[i].position.z);
                   
                   editor.execute(new SetScaleCommand(editor, object.children[i], newScale));
                   editor.execute(new SetPositionCommand(editor, object.children[i], newPosition2));
              }
              else if(object.children[i].name === "doorA6" ||
              object.children[i].name === "doorA7" 
          

             ){

               const newPosition2 = new THREE.Vector3(objectScaleX.getValue()*9.5,object.children[i].position.y, object.children[i].position.z);

               editor.execute(new SetPositionCommand(editor, object.children[i], newPosition2));


              }else if(
              object.children[i].name === "doorA5" 

             ){

               const newPosition2 = new THREE.Vector3(objectScaleX.getValue()*4.8,object.children[i].position.y, object.children[i].position.z);

               editor.execute(new SetPositionCommand(editor, object.children[i], newPosition2));


              } else if(
                
                object.children[i].name === "doorA8"

               ){

                 const newPosition2 = new THREE.Vector3(objectScaleX.getValue()*5.4,object.children[i].position.y, object.children[i].position.z);

                 editor.execute(new SetPositionCommand(editor, object.children[i], newPosition2));


                }
                //Louver Cover
                 

               else if  
               (object.children[i].name === "lCoverFB4" ||
               object.children[i].name === "lCoverFB3" 
               
                ) {
                   const newScale = new THREE.Vector3(objectScaleX.getValue(), object.children[i].scale.y,object.children[i].scale.z);
                    const newPosition2 = new THREE.Vector3(objectScaleX.getValue()*9.8,object.children[i].position.y, object.children[i].position.z);

                   editor.execute(new SetScaleCommand(editor, object.children[i], newScale));
                   editor.execute(new SetPositionCommand(editor, object.children[i], newPosition2));
              }else if(object.children[i].name === "lCoverFB1" 
              ){

               const newPosition2 = new THREE.Vector3(objectScaleX.getValue()*20,object.children[i].position.y, object.children[i].position.z);

               editor.execute(new SetPositionCommand(editor, object.children[i], newPosition2));


              }else if(object.children[i].name === "lCoverFB5"){
                const newScale = new THREE.Vector3(objectScaleX.getValue()*1.08, object.children[i].scale.y,object.children[i].scale.z);

                const newPosition2 = new THREE.Vector3(objectScaleX.getValue()*10,object.children[i].position.y, object.children[i].position.z);

                editor.execute(new SetScaleCommand(editor, object.children[i], newScale));
                editor.execute(new SetPositionCommand(editor, object.children[i], newPosition2));

               }

               //Cable gland
               
               else if  
               (object.children[i].name === "cableGland1" 
                ) {
                   const newScale = new THREE.Vector3(objectScaleX.getValue(), object.children[i].scale.y,object.children[i].scale.z);
                    const newPosition2 = new THREE.Vector3(objectScaleX.getValue()*10,object.children[i].position.y, object.children[i].position.z);
                   
                   editor.execute(new SetScaleCommand(editor, object.children[i], newScale));
                   editor.execute(new SetPositionCommand(editor, object.children[i], newPosition2));
              }
              else if  
               (object.children[i].name === "cableGland2" 
                ) {
                    const newScale = new THREE.Vector3(objectScaleX.getValue(), object.children[i].scale.y,object.children[i].scale.z);

                    const newPosition2 = new THREE.Vector3(objectScaleX.getValue()*15,object.children[i].position.y, object.children[i].position.z);
                   
                   editor.execute(new SetPositionCommand(editor, object.children[i], newPosition2));
                   editor.execute(new SetScaleCommand(editor, object.children[i], newScale));

              }else if  
              (object.children[i].name === "cableGland3" 
               ) {
                   const newPosition2 = new THREE.Vector3(objectScaleX.getValue()*5,object.children[i].position.y, object.children[i].position.z);
                   const newScale = new THREE.Vector3(objectScaleX.getValue(), object.children[i].scale.y,object.children[i].scale.z);

                  
                  editor.execute(new SetPositionCommand(editor, object.children[i], newPosition2));
                  editor.execute(new SetScaleCommand(editor, object.children[i], newScale));

             }
             //MPlates
              
               
              else if  
              (object.children[i].name === "mPlates1" 
               ) {
                  const newScale = new THREE.Vector3(objectScaleX.getValue(), object.children[i].scale.y,object.children[i].scale.z);
                   const newPosition2 = new THREE.Vector3(objectScaleX.getValue()*5,object.children[i].position.y, object.children[i].position.z);
                  
                  editor.execute(new SetScaleCommand(editor, object.children[i], newScale));
                  editor.execute(new SetPositionCommand(editor, object.children[i], newPosition2));
             }else if  
             (object.children[i].name === "mPlates2" ||
             object.children[i].name === "mPlates3"

              ) {
                  const newPosition2 = new THREE.Vector3(objectScaleX.getValue()*9.9,object.children[i].position.y, object.children[i].position.z);
                 
                 editor.execute(new SetPositionCommand(editor, object.children[i], newPosition2));
            }
            //Din Modules   

           
                 

             else if  
             (object.children[i].name === "dinModels4" ||
             object.children[i].name === "dinModels3" ||
             object.children[i].name === "dinModels7"
             
              ) {
                 const newScale = new THREE.Vector3(objectScaleX.getValue()*1.025, object.children[i].scale.y,object.children[i].scale.z);
                  const newPosition2 = new THREE.Vector3(objectScaleX.getValue()*10.25,object.children[i].position.y, object.children[i].position.z);

                 editor.execute(new SetScaleCommand(editor, object.children[i], newScale));
                 editor.execute(new SetPositionCommand(editor, object.children[i], newPosition2));
            }else if(object.children[i].name === "dinModels1" 
            ){

             const newPosition2 = new THREE.Vector3(objectScaleX.getValue()*20.1,object.children[i].position.y, object.children[i].position.z);

             editor.execute(new SetPositionCommand(editor, object.children[i], newPosition2));


            }
            else if(
            object.children[i].name === "dinModels5"
            ){

             const newPosition2 = new THREE.Vector3(objectScaleX.getValue()*20.1,object.children[i].position.y, object.children[i].position.z);

             editor.execute(new SetPositionCommand(editor, object.children[i], newPosition2));


            }

            //Bus Bar
            else if  
            (object.children[i].name === "bBar1" ||
            object.children[i].name === "bBar2" ||
            object.children[i].name === "bBar3"||
            object.children[i].name === "bBar4"
            
             ) {
                const newScale = new THREE.Vector3(objectScaleX.getValue()*1.025, object.children[i].scale.y,object.children[i].scale.z);
                 const newPosition2 = new THREE.Vector3(objectScaleX.getValue()*10.25,object.children[i].position.y, object.children[i].position.z);

                editor.execute(new SetScaleCommand(editor, object.children[i], newScale));
                editor.execute(new SetPositionCommand(editor, object.children[i], newPosition2));
           }
                    
                }
            }
        }
        }

    function updateScaleY() {
    let object = editor.selected;

    

    if (object !== null) {
        const newScale = new THREE.Vector3(1, objectScaleY.getValue(), 1);
       // const newPosition = new THREE.Vector3(objectPositionX.getValue(), objectPositionY.getValue(),  objectScaleZ.getValue()*5.1);

        if (object.scale.distanceTo(newScale) >= 0.01) {
            for (let i = 0; i < object.children.length; i++) {
                const newPosition = new THREE.Vector3(object.children[i].position.x,objectScaleY.getValue()*10, object.children[i].position.z);
                const newPosition2 = new THREE.Vector3(object.children[i].position.x,objectScaleY.getValue()*5, object.children[i].position.z);

                //console.log(object.children[i].name);
                if (object.children[i].name === "main5" ||
                    object.children[i].name === "main6" ||
                    object.children[i].name === "main7" ||
                    object.children[i].name === "main8") {
                
                    editor.execute(new SetScaleCommand(editor, object.children[i], newScale));
                    editor.execute(new SetPositionCommand(editor, object.children[i], newPosition2));

                //  console.log("ScaleX-->> ",newScale);
                }
                else if 
                (object.children[i].name === "main2" ||
                object.children[i].name === "main4" ||
                object.children[i].name === "main11" ||
                object.children[i].name === "main12" ||
                object.children[i].name === "main13" ||
                object.children[i].name === "main14" ||
                object.children[i].name === "main17" ||
                object.children[i].name === "main18" 
               
                )
                {
                
                 editor.execute(new SetPositionCommand(editor, object.children[i], newPosition ));

                }
                else if(object.children[i].name === "Door"){
                    const newScale = new THREE.Vector3(object.children[i].scale.x, objectScaleY.getValue(), object.children[i].scale.z);
                    const newPosition2 = new THREE.Vector3(object.children[i].position.x,objectScaleY.getValue()*5, object.children[i].position.z);

                     editor.execute(new SetScaleCommand(editor, object.children[i], newScale));
                     editor.execute(new SetPositionCommand(editor, object.children[i], newPosition2));

                }else if(
                object.children[i].name === "door4"
                ){
                    const newPosition2 = new THREE.Vector3(object.children[i].position.x,objectScaleY.getValue()*5.28, object.children[i].position.z);

                    editor.execute(new SetPositionCommand(editor, object.children[i], newPosition2));
                    
                }else if(object.children[i].name === "door3"
                ){
                    const newPosition2 = new THREE.Vector3(object.children[i].position.x,objectScaleY.getValue()*9.6, object.children[i].position.z);

                    editor.execute(new SetPositionCommand(editor, object.children[i], newPosition2));
                    
                }else if(object.children[i].name === "doorG1"||
                object.children[i].name === "doorG2"


                ){
                    const newScale = new THREE.Vector3(object.children[i].scale.x, objectScaleY.getValue(), object.children[i].scale.z);
                    const newPosition2 = new THREE.Vector3(object.children[i].position.x,objectScaleY.getValue()*5.5, object.children[i].position.z);

                     editor.execute(new SetScaleCommand(editor, object.children[i], newScale));
                     editor.execute(new SetPositionCommand(editor, object.children[i], newPosition2));

                }else if(object.children[i].name === "doorG5" 
                            


                ){
                    const newScale = new THREE.Vector3(object.children[i].scale.x, objectScaleY.getValue(), object.children[i].scale.z);
                    const newPosition2 = new THREE.Vector3(object.children[i].position.x,objectScaleY.getValue()*5.5, object.children[i].position.z);

                     editor.execute(new SetScaleCommand(editor, object.children[i], newScale));
                     editor.execute(new SetPositionCommand(editor, object.children[i], newPosition2));

                }else if(object.children[i].name === "doorG3"


                ){
                    const newScale = new THREE.Vector3(object.children[i].scale.x, objectScaleY.getValue(), object.children[i].scale.z);
                    const newPosition2 = new THREE.Vector3(object.children[i].position.x,objectScaleY.getValue()*10.5, object.children[i].position.z);

                    
                     editor.execute(new SetPositionCommand(editor, object.children[i], newPosition2));

                }
                else if(object.children[i].name === "doorG7" 


                ){
                    const newScale = new THREE.Vector3(object.children[i].scale.x, objectScaleY.getValue(), object.children[i].scale.z);
                    const newPosition2 = new THREE.Vector3(object.children[i].position.x,objectScaleY.getValue()*9.5, object.children[i].position.z);

                    
                     editor.execute(new SetPositionCommand(editor, object.children[i], newPosition2));

                }else if(object.children[i].name === "doorG8" 


                ){
                    const newScale = new THREE.Vector3(object.children[i].scale.x, objectScaleY.getValue(), object.children[i].scale.z);
                    const newPosition2 = new THREE.Vector3(object.children[i].position.x,objectScaleY.getValue()*5.3, object.children[i].position.z);

                    
                     editor.execute(new SetPositionCommand(editor, object.children[i], newPosition2));

                }
                
                //Adjcent Door
                else if(object.children[i].name === "doorA1" ||
                object.children[i].name === "doorA2" 
                            


                ){
                    const newScale = new THREE.Vector3(object.children[i].scale.x, objectScaleY.getValue(), object.children[i].scale.z);
                    const newPosition2 = new THREE.Vector3(object.children[i].position.x,objectScaleY.getValue()*5.2, object.children[i].position.z);

                     editor.execute(new SetScaleCommand(editor, object.children[i], newScale));
                     editor.execute(new SetPositionCommand(editor, object.children[i], newPosition2));

                } else if(object.children[i].name === "doorA4" ||
                object.children[i].name === "doorA7" 
                  
                ){
                    const newPosition2 = new THREE.Vector3(object.children[i].position.x,objectScaleY.getValue()*9.5, object.children[i].position.z);

                     editor.execute(new SetPositionCommand(editor, object.children[i], newPosition2));

                }else if(object.children[i].name === "doorA5" ||
                object.children[i].name === "doorA8" 
                  
                ){
                    const newPosition2 = new THREE.Vector3(object.children[i].position.x,objectScaleY.getValue()*5.2, object.children[i].position.z);

                     editor.execute(new SetPositionCommand(editor, object.children[i], newPosition2));

                }
                
                //Cover
                
                else if(object.children[i].name === "coverLR"
                  
                ){
                    const newScale = new THREE.Vector3(object.children[i].scale.x, objectScaleY.getValue(), object.children[i].scale.z);

                     editor.execute(new SetScaleCommand(editor, object.children[i], newScale));
                }

                //Splitter
                else if(object.children[i].name === "spliterV5" ||
                object.children[i].name === "spliterV7" 

                ){
                    const newScale = new THREE.Vector3(object.children[i].scale.x, objectScaleY.getValue(), object.children[i].scale.z);
                    const newPosition2 = new THREE.Vector3(object.children[i].position.x,objectScaleY.getValue()*5.4, object.children[i].position.z);

                     editor.execute(new SetScaleCommand(editor, object.children[i], newScale));
                     editor.execute(new SetPositionCommand(editor, object.children[i], newPosition2));

                } else if(object.children[i].name === "spliterV1" 

                ){
                    const newPosition2 = new THREE.Vector3(object.children[i].position.x,objectScaleY.getValue()*10.5, object.children[i].position.z);

                     editor.execute(new SetPositionCommand(editor, object.children[i], newPosition2));

                }

                //Louver Cover

                else if(object.children[i].name === "lCoverFB1"||
                object.children[i].name === "lCoverFB2"


                ){
                    const newScale = new THREE.Vector3(object.children[i].scale.x, objectScaleY.getValue(), object.children[i].scale.z);
                    const newPosition2 = new THREE.Vector3(object.children[i].position.x,objectScaleY.getValue()*5, object.children[i].position.z);

                     editor.execute(new SetScaleCommand(editor, object.children[i], newScale));
                     editor.execute(new SetPositionCommand(editor, object.children[i], newPosition2));

                }else if(object.children[i].name === "lCoverFB5" 
                            


                ){
                    const newScale = new THREE.Vector3(object.children[i].scale.x, objectScaleY.getValue(), object.children[i].scale.z);
                    const newPosition2 = new THREE.Vector3(object.children[i].position.x,objectScaleY.getValue()*5, object.children[i].position.z);

                     editor.execute(new SetScaleCommand(editor, object.children[i], newScale));
                     editor.execute(new SetPositionCommand(editor, object.children[i], newPosition2));

                }else if(object.children[i].name === "lCoverFB4"


                ){
                    const newPosition2 = new THREE.Vector3(object.children[i].position.x,objectScaleY.getValue()*10, object.children[i].position.z);

                    
                     editor.execute(new SetPositionCommand(editor, object.children[i], newPosition2));

                }

                //Mplates
                else if(object.children[i].name === "mPlates1"


                ){
                    const newScale = new THREE.Vector3(object.children[i].scale.x, objectScaleY.getValue(), object.children[i].scale.z);
                    const newPosition2 = new THREE.Vector3(object.children[i].position.x,objectScaleY.getValue()*10, object.children[i].position.z);

                     editor.execute(new SetScaleCommand(editor, object.children[i], newScale));
                     editor.execute(new SetPositionCommand(editor, object.children[i], newPosition2));

                }else if(object.children[i].name === "mPlates2" ||
                object.children[i].name === "mPlates4"



                ){
                    const newPosition2 = new THREE.Vector3(object.children[i].position.x,objectScaleY.getValue()*19.8, object.children[i].position.z);

                     editor.execute(new SetPositionCommand(editor, object.children[i], newPosition2));

                }

                //Din Modules
                else if(object.children[i].name === "dinModels1" ||
                object.children[i].name === "dinModels2"
                ){
                    const newScale = new THREE.Vector3(object.children[i].scale.x, objectScaleY.getValue(), object.children[i].scale.z);
                    const newPosition2 = new THREE.Vector3(object.children[i].position.x,objectScaleY.getValue()*2.5, object.children[i].position.z);

                     editor.execute(new SetScaleCommand(editor, object.children[i], newScale));
                     editor.execute(new SetPositionCommand(editor, object.children[i], newPosition2));

                }
                else if(object.children[i].name === "dinModels4" 
                ){
                    const newPosition2 = new THREE.Vector3(object.children[i].position.x,objectScaleY.getValue()*5, object.children[i].position.z);

                     editor.execute(new SetPositionCommand(editor, object.children[i], newPosition2));

                } else if(object.children[i].name === "dinModels7" ||
                object.children[i].name === "dinModels5" ||
                object.children[i].name === "dinModels6" 
                ){
                    const newPosition2 = new THREE.Vector3(object.children[i].position.x,objectScaleY.getValue()*2.5, object.children[i].position.z);

                     editor.execute(new SetPositionCommand(editor, object.children[i], newPosition2));

                }

                //Bus Bar Holder
                else if(object.children[i].name === "bbHolder3" ||
                object.children[i].name === "bbHolder4" ||
                object.children[i].name === "bbHolder5" ||
                object.children[i].name === "bbHolder6" ||
                object.children[i].name === "bbHolder7" 
                            


                ){
                    const newScale = new THREE.Vector3(object.children[i].scale.x, objectScaleY.getValue(), object.children[i].scale.z);
                    const newPosition2 = new THREE.Vector3(object.children[i].position.x,objectScaleY.getValue()*2.8, object.children[i].position.z);

                     editor.execute(new SetScaleCommand(editor, object.children[i], newScale));
                     editor.execute(new SetPositionCommand(editor, object.children[i], newPosition2));

                }else if(object.children[i].name === "bbHolder1" 
                            


                ){
                    const newPosition2 = new THREE.Vector3(object.children[i].position.x,objectScaleY.getValue()*5.5, object.children[i].position.z);

                     editor.execute(new SetPositionCommand(editor, object.children[i], newPosition2));

                }else if(
                object.children[i].name === "bbHolder8" 
                            


                ){
                    const newPosition2 = new THREE.Vector3(object.children[i].position.x,objectScaleY.getValue()*5.4, object.children[i].position.z);

                     editor.execute(new SetPositionCommand(editor, object.children[i], newPosition2));

                }
                
            }
        }
    }
    }
    
    function updateScaleZ() {
        let object = editor.selected;

        
    
        if (object !== null) {
            const newScale = new THREE.Vector3(1, 1, objectScaleZ.getValue());
           
            if (object.scale.distanceTo(newScale) >= 0.01) {
    
                for (let i = 0; i < object.children.length; i++) {
                     const newPosition1 = new THREE.Vector3(object.children[i].position.x, object.children[i].position.y,  objectScaleZ.getValue()*10);
                     const newPosition3 = new THREE.Vector3(object.children[i].position.x, object.children[i].position.y,  objectScaleZ.getValue()*5);
                     const newPosition99 = new THREE.Vector3(object.children[i].position.x, object.children[i].position.y, 0.5   );

                    //console.log(object.children[i].name);
                    if (object.children[i].name === "main3" ||
                        object.children[i].name === "main1" ||
                        object.children[i].name === "main2" ||
                        object.children[i].name === "main4"||
                     
                        object.children[i].name === "main24" ||
                        object.children[i].name === "main23" 
                        
                        ) {
                    
                        editor.execute(new SetScaleCommand(editor, object.children[i], newScale));
                        editor.execute(new SetPositionCommand(editor, object.children[i], newPosition3));

                    // console.log("ScaleY-->> ",object.children[i].scale);

                    }
                    else if 
                    (object.children[i].name === "main9" ||
                    object.children[i].name === "main5" ||
                    object.children[i].name === "main6" ||
                
                    object.children[i].name === "main11" ||
                    object.children[i].name === "main13" ||
                    object.children[i].name === "main14" ||
                    object.children[i].name === "main15" ||
                    object.children[i].name === "main16" ||
                    object.children[i].name === "main21" 

                    ) {
                    
                    editor.execute(new SetPositionCommand(editor, object.children[i], newPosition1));
                    console.log(object.children[i].name,"-->>",newPosition1)
                   
    
                    //console.log(newPosition)
                    
                    
                }else if 
                (
                object.children[i].name === "main10" ||
                object.children[i].name === "main7"||
                object.children[i].name === "main8" ||
                object.children[i].name === "main12" ||
                object.children[i].name === "main22" ||
                object.children[i].name === "main17" ||
                object.children[i].name === "main18" ||
                object.children[i].name === "main19"||
                object.children[i].name === "main20"

                ) {
                
                editor.execute(new SetPositionCommand(editor, object.children[i], newPosition99));
               // console.log(object.children[i].name,"-->>",newPosition1)

            }
            //Cover
            else if 
                (
                object.children[i].name === "coverLR" 

                ) {
                    const newScale = new THREE.Vector3(object.children[i].scale.x, object.children[i].scale.y, objectScaleZ.getValue());

                    editor.execute(new SetScaleCommand(editor, object.children[i], newScale));
            }

            //Splitter
            else if 
                (
                object.children[i].name === "spliterV1" ||
                object.children[i].name === "spliterV3" 


                ) {
                    const newPosition3 = new THREE.Vector3(object.children[i].position.x, object.children[i].position.y,  objectScaleZ.getValue()*5.2);

                    const newScale = new THREE.Vector3(object.children[i].scale.x, object.children[i].scale.y, objectScaleZ.getValue());

                    editor.execute(new SetScaleCommand(editor, object.children[i], newScale));
                    editor.execute(new SetPositionCommand(editor, object.children[i], newPosition3));

            }else if 
            (
            object.children[i].name === "spliterV5" 


            ) {
                const newPosition3 = new THREE.Vector3(object.children[i].position.x, object.children[i].position.y,  objectScaleZ.getValue()*10.2);


                editor.execute(new SetPositionCommand(editor, object.children[i], newPosition3));

          }
          //Cable Gland
          else if 
                (
                object.children[i].name === "cableGland1" 


                ) {
                    const newPosition3 = new THREE.Vector3(object.children[i].position.x, object.children[i].position.y,  objectScaleZ.getValue()*5.2);

                    const newScale = new THREE.Vector3(object.children[i].scale.x, object.children[i].scale.y, objectScaleZ.getValue());

                    editor.execute(new SetScaleCommand(editor, object.children[i], newScale));
                    editor.execute(new SetPositionCommand(editor, object.children[i], newPosition3));

            }else if 
            (
            object.children[i].name === "cableGland3" ||
            object.children[i].name === "cableGland2"



            ) {
                const newPosition3 = new THREE.Vector3(object.children[i].position.x, object.children[i].position.y,  objectScaleZ.getValue()*5.2);

                const newScale = new THREE.Vector3(object.children[i].scale.x, object.children[i].scale.y, objectScaleZ.getValue());

                editor.execute(new SetScaleCommand(editor, object.children[i], newScale));
                editor.execute(new SetPositionCommand(editor, object.children[i], newPosition3));

            }
            //Bus Bar Holder
            else if 
                (
                object.children[i].name === "bbHolder1" ||
                object.children[i].name === "bbHolder2" ||
                object.children[i].name === "bbHolder8" ||
                object.children[i].name === "bbHolder9" 


                ) {
                    const newPosition3 = new THREE.Vector3(object.children[i].position.x, object.children[i].position.y,  objectScaleZ.getValue()*10);

                    const newScale = new THREE.Vector3(object.children[i].scale.x, object.children[i].scale.y, objectScaleZ.getValue());

                    editor.execute(new SetScaleCommand(editor, object.children[i], newScale));
                    editor.execute(new SetPositionCommand(editor, object.children[i], newPosition3));

            }else if 
            (
            object.children[i].name === "bbHolder3" 
            ) {
                const newPosition3 = new THREE.Vector3(object.children[i].position.x, object.children[i].position.y,objectScaleZ.getValue()*18);
                editor.execute(new SetPositionCommand(editor, object.children[i], newPosition3));
               }
            else if 
              (
              object.children[i].name === "bbHolder4" 
              ) {
                  const newPosition3 = new THREE.Vector3(object.children[i].position.x, object.children[i].position.y,  objectScaleZ.getValue()*14);
                  editor.execute(new SetPositionCommand(editor, object.children[i], newPosition3));
                }else if 
                (
                object.children[i].name === "bbHolder5" 
                ) {
                    const newPosition3 = new THREE.Vector3(object.children[i].position.x, object.children[i].position.y, objectScaleZ.getValue()*10);
                    editor.execute(new SetPositionCommand(editor, object.children[i], newPosition3));
                  }else if 
                  (
                  object.children[i].name === "bbHolder6" 
                  ) {
                      const newPosition3 = new THREE.Vector3(object.children[i].position.x, object.children[i].position.y,  objectScaleZ.getValue()*6);
                      editor.execute(new SetPositionCommand(editor, object.children[i], newPosition3));
                    }else if 
                    (
                    object.children[i].name === "bbHolder7" 
                    ) {
                        const newPosition3 = new THREE.Vector3(object.children[i].position.x, object.children[i].position.y, objectScaleZ.getValue()*2);
                        editor.execute(new SetPositionCommand(editor, object.children[i], newPosition3));
                      }

                      //Bus bar
                    else if 
                        (
                        object.children[i].name === "bBar1" 
                        ) {
                            const newPosition3 = new THREE.Vector3(object.children[i].position.x, object.children[i].position.y,  objectScaleZ.getValue()*4);
                            editor.execute(new SetPositionCommand(editor, object.children[i], newPosition3));

                        } else if 
                        (
                        object.children[i].name === "bBar2" 
                        ) {
                            const newPosition3 = new THREE.Vector3(object.children[i].position.x, object.children[i].position.y,  objectScaleZ.getValue()*3);
                            editor.execute(new SetPositionCommand(editor, object.children[i], newPosition3));

                        } else if 
                        (
                        object.children[i].name === "bBar3" 
                        ) {
                            const newPosition3 = new THREE.Vector3(object.children[i].position.x, object.children[i].position.y,  objectScaleZ.getValue()*2);
                            editor.execute(new SetPositionCommand(editor, object.children[i], newPosition3));

                        } else if 
                        (
                        object.children[i].name === "bBar4" 
                        ) {
                            const newPosition3 = new THREE.Vector3(object.children[i].position.x, object.children[i].position.y,  objectScaleZ.getValue()*1);
                            editor.execute(new SetPositionCommand(editor, object.children[i], newPosition3));

                        }
                    
                    
                }
                
              
            }
        }
        }

    


    function updateRows(object) {

        const properties = {
            'fov': objectFovRow,
            'left': objectLeftRow,
            'right': objectRightRow,
            'top': objectTopRow,
            'bottom': objectBottomRow,
            'near': objectNearRow,
            'far': objectFarRow,
            'intensity': objectIntensityRow,
            'color': objectColorRow,
            'groundColor': objectGroundColorRow,
            'distance': objectDistanceRow,
            'angle': objectAngleRow,
            'penumbra': objectPenumbraRow,
            'decay': objectDecayRow,
            'castShadow': objectShadowRow,
            'receiveShadow': objectReceiveShadow,
            'shadow': [objectShadowBiasRow, objectShadowNormalBiasRow, objectShadowRadiusRow]
        };

        for (const property in properties) {

            const uiElement = properties[property];

            if (Array.isArray(uiElement) === true) {

                for (let i = 0; i < uiElement.length; i++) {

                    uiElement[i].setDisplay(object[property] !== undefined ? '' : 'none');

                }

            } else {

                uiElement.setDisplay(object[property] !== undefined ? '' : 'none');

            }

        }

        //

        if (object.isLight) {

            objectReceiveShadow.setDisplay('none');

        }

        if (object.isAmbientLight || object.isHemisphereLight) {

            objectShadowRow.setDisplay('none');

        }

    }

    function updateTransformRows(object) {

        if (object.isLight ||
            (object.isObject3D && object.userData.targetInverse)) {

            objectRotationRow.setDisplay('none');
            objectScaleRow.setDisplay('none');

        } else {

            objectRotationRow.setDisplay('');
            objectScaleRow.setDisplay('');

        }

    }

    // events

    signals.objectSelected.add(function(object) {

        if (object !== null) {

            container.setDisplay('block');

            updateRows(object);
            updateUI(object);

        } else {

            container.setDisplay('none');

        }

    });

    signals.objectChanged.add(function(object) {

        if (object !== editor.selected) return;

        updateUI(object);

    });

    signals.refreshSidebarObject3D.add(function(object) {

        if (object !== editor.selected) return;

        updateUI(object);

    });

    function updateUI(object) {

        objectType.setValue(object.type);

        objectUUID.setValue(object.uuid);
        objectName.setValue(object.name);

        objectPositionX.setValue(object.position.x);
        objectPositionY.setValue(object.position.y);
        objectPositionZ.setValue(object.position.z);

        objectRotationX.setValue(object.rotation.x * THREE.MathUtils.RAD2DEG);
        objectRotationY.setValue(object.rotation.y * THREE.MathUtils.RAD2DEG);
        objectRotationZ.setValue(object.rotation.z * THREE.MathUtils.RAD2DEG);

    
    
        objectScaleX.setValue(object.scale.x);
        objectScaleY.setValue(object.scale.y);
        objectScaleZ.setValue(object.scale.z);

        if (object.fov !== undefined) {

            objectFov.setValue(object.fov);

        }

        if (object.left !== undefined) {

            objectLeft.setValue(object.left);

        }

        if (object.right !== undefined) {

            objectRight.setValue(object.right);

        }

        if (object.top !== undefined) {

            objectTop.setValue(object.top);

        }

        if (object.bottom !== undefined) {

            objectBottom.setValue(object.bottom);

        }

        if (object.near !== undefined) {

            objectNear.setValue(object.near);

        }

        if (object.far !== undefined) {

            objectFar.setValue(object.far);

        }

        if (object.intensity !== undefined) {

            objectIntensity.setValue(object.intensity);

        }

        if (object.color !== undefined) {

            objectColor.setHexValue(object.color.getHexString());

        }

        if (object.groundColor !== undefined) {

            objectGroundColor.setHexValue(object.groundColor.getHexString());

        }

        if (object.distance !== undefined) {

            objectDistance.setValue(object.distance);

        }

        if (object.angle !== undefined) {

            objectAngle.setValue(object.angle);

        }

        if (object.penumbra !== undefined) {

            objectPenumbra.setValue(object.penumbra);

        }

        if (object.decay !== undefined) {

            objectDecay.setValue(object.decay);

        }

        if (object.castShadow !== undefined) {

            objectCastShadow.setValue(object.castShadow);

        }

        if (object.receiveShadow !== undefined) {

            objectReceiveShadow.setValue(object.receiveShadow);

        }

        if (object.shadow !== undefined) {

            objectShadowBias.setValue(object.shadow.bias);
            objectShadowNormalBias.setValue(object.shadow.normalBias);
            objectShadowRadius.setValue(object.shadow.radius);

        

        }

        objectVisible.setValue(object.visible);
        objectFrustumCulled.setValue(object.frustumCulled);
        objectRenderOrder.setValue(object.renderOrder);

        try {

            objectUserData.setValue(JSON.stringify(object.userData, null, '  '));

        } catch (error) {

            console.log(error);

        }

        objectUserData.setBorderColor('transparent');
        objectUserData.setBackgroundColor('');

        updateTransformRows(object);

    }

    return container;

}

export {
    SidebarObject
};