import { UIPanel, UIButton, UICheckbox } from "./libs/ui.js";

import { AddObjectCommand } from "./commands/AddObjectCommand.js";

let barSize = 1;
let modSize = 10;
let glassDoorBar = 1;
let cubeGeo;
let cubeMaterial;

let spliterVContainer;
let doorContainer;
let glassDoorContainer;
let busBarHContainer;
let busBarhContainer;
let ajecentDoorContainer;
let louverCoverContainer;
let louverCoverContainerLR;
let cableGlandContainer;
let mountingPlateContainer;
let dinModelContainer;
let busBarHolderContainer;
let coverTBContainer;
let coverFBContainer;
let coverLRContainer;
let doorA1;
let doorA2;
let doorA3;
let doorA4;
let doorA5;
let doorA6;
let doorA7;
let doorA8;
let spliterV1;
let spliterV3;
let spliterV5;
let spliterV7;

//Covers
let lCoverFB1;
let lCoverFB2;
let lCoverFB3;
let lCoverFB4;
let lCoverFB5;
let lCoverLR1;
let lCoverLR2;
let lCoverLR3;
let lCoverLR4;
let lCoverLR5;
let cableGland1;
let cableGland2;
let cableGland3;

//Mounting Plates
let mPlates1;
let mPlates2;
let mPlates3;
let mPlates4;
let mPlates5;

//Mounting Plates LR
let mPlatesLR1;
let mPlatesLR2;
let mPlatesLR3;
let mPlatesLR4;
let mPlatesLR5;

//Din Models
let dinModels1;
let dinModels2;
let dinModels3;
let dinModels4;
let dinModels5;
let dinModels6;
let dinModels7;

//Bus Bar Holder
let bbHolder1;
let bbHolder2;
let bbHolder3;
let bbHolder4;
let bbHolder5;
let bbHolder6;
let bbHolder7;
let bbHolder8;
let bbHolder9;

//Bus Bar Holder Horizontal
let hbbHolder1;
let hbbHolder2;
let hbbHolder3;
let hbbHolder4;
let hbbHolder5;
let hbbHolder6;
let hbbHolder7;
let hbbHolder8;
let hbbHolder9;
function Toolbar(editor) {
  const signals = editor.signals;
  const strings = editor.strings;

  const container = new UIPanel();
  container.setId("toolbar");

  // translate / rotate / scale

  const translateIcon = document.createElement("img");
  translateIcon.title = strings.getKey("toolbar/translate");
  translateIcon.src = "images/translate.svg";

  const translate = new UIButton();
  translate.dom.className = "Button selected";
  translate.dom.appendChild(translateIcon);
  translate.onClick(function () {
    signals.transformModeChanged.dispatch("translate");
  });
  container.add(translate);

  const rotateIcon = document.createElement("img");
  rotateIcon.title = strings.getKey("toolbar/rotate");
  rotateIcon.src = "images/rotate.svg";

  const rotate = new UIButton();
  rotate.dom.appendChild(rotateIcon);
  rotate.onClick(function () {
    signals.transformModeChanged.dispatch("rotate");
  });
  container.add(rotate);

  const scaleIcon = document.createElement("img");
  scaleIcon.title = strings.getKey("toolbar/scale");
  scaleIcon.src = "images/scale.svg";

  const scale = new UIButton();
  scale.dom.appendChild(scaleIcon);
  scale.onClick(function () {
    signals.transformModeChanged.dispatch("scale");
  });
  container.add(scale);

  //Panel
  const scaleIcon2 = document.createElement("img");
  scaleIcon2.title = strings.getKey("toolbar/Panel");
  scaleIcon2.src = "images/panel.svg";

  const scale2 = new UIButton();
  scale2.dom.appendChild(scaleIcon2);
  scale2.onClick(function () {
    let cubeGeo = new THREE.BoxGeometry(barSize, barSize, modSize);
    let cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xe7e8e3 });

    let main1 = new THREE.Mesh(cubeGeo, cubeMaterial);
    main1.position.set(0, 0, 0);
    main1.name = "main1";

    let main2 = new THREE.Mesh(cubeGeo, cubeMaterial);
    main2.position.set(0, 10, 0);
    main2.name = "main2";

    let main3 = new THREE.Mesh(cubeGeo, cubeMaterial);
    main3.position.set(10, 0, 0);
    main3.name = "main3";

    let main4 = new THREE.Mesh(cubeGeo, cubeMaterial);
    main4.position.set(10, 10, 0);
    main4.name = "main4";

    cubeGeo = new THREE.BoxGeometry(barSize, modSize, barSize);

    let main5 = new THREE.Mesh(cubeGeo, cubeMaterial);
    main5.position.set(10, 4.8, 5);
    main5.name = "main5";

    let main6 = new THREE.Mesh(cubeGeo, cubeMaterial);
    main6.position.set(0, 4.8, 5);
    main6.name = "main6";

    let main7 = new THREE.Mesh(cubeGeo, cubeMaterial);
    main7.position.set(10, 4.8, -5);
    main7.name = "main7";

    let main8 = new THREE.Mesh(cubeGeo, cubeMaterial);
    main8.position.set(0, 4.8, -5);
    main8.name = "main8";

    cubeGeo = new THREE.BoxGeometry(modSize, barSize, barSize);

    let main9 = new THREE.Mesh(cubeGeo, cubeMaterial);
    main9.position.set(5, 0, 5);
    main9.name = "main9";

    let main10 = new THREE.Mesh(cubeGeo, cubeMaterial);
    main10.position.set(5, 0, -5);
    main10.name = "main10";

    let main11 = new THREE.Mesh(cubeGeo, cubeMaterial);
    main11.position.set(5, 10, 5);
    main11.name = "main11";

    let main12 = new THREE.Mesh(cubeGeo, cubeMaterial);
    main12.position.set(5, 10, -5);
    main12.name = "main12";

    cubeGeo = new THREE.BoxGeometry(barSize, barSize, barSize);

    let main13 = new THREE.Mesh(cubeGeo, cubeMaterial);
    main13.position.set(10, 10, 5);
    main13.name = "main13";

    let main14 = new THREE.Mesh(cubeGeo, cubeMaterial);
    main14.position.set(0, 10, 5);
    main14.name = "main14";

    let main15 = new THREE.Mesh(cubeGeo, cubeMaterial);
    main15.position.set(10, 0, 5);
    main15.name = "main15";

    let main16 = new THREE.Mesh(cubeGeo, cubeMaterial);
    main16.position.set(0, 0, 5);
    main16.name = "main16";

    let main17 = new THREE.Mesh(cubeGeo, cubeMaterial);
    main17.position.set(10, 10, -5);
    main17.name = "main17";

    let main18 = new THREE.Mesh(cubeGeo, cubeMaterial);
    main18.position.set(0, 10, -5);
    main18.name = "main18";

    let main19 = new THREE.Mesh(cubeGeo, cubeMaterial);
    main19.position.set(10, 0, -5);
    main19.name = "main19";

    let main20 = new THREE.Mesh(cubeGeo, cubeMaterial);
    main20.position.set(0, 0, -5);
    main20.name = "main20";

    cubeGeo = new THREE.BoxGeometry(modSize, glassDoorBar, barSize);
    cubeMaterial = new THREE.MeshLambertMaterial({ color: 0x000000 });
    let main21 = new THREE.Mesh(cubeGeo, cubeMaterial);
    main21.position.set(5, -1, 5);
    main21.name = "main21";

    let main22 = new THREE.Mesh(cubeGeo, cubeMaterial);
    main22.position.set(5, -1, -5);
    main22.name = "main22";

    cubeGeo = new THREE.BoxGeometry(barSize, glassDoorBar, modSize);
    let main23 = new THREE.Mesh(cubeGeo, cubeMaterial);
    main23.position.set(10, -1, 0);
    main23.name = "main23";

    let main24 = new THREE.Mesh(cubeGeo, cubeMaterial);
    main24.position.set(0, -1, 0);
    main24.name = "main24";

    let Panelcontainer = new THREE.Group();

    Panelcontainer.add(
      main1,
      main2,
      main3,
      main4,
      main5,
      main6,
      main7,
      main8,
      main9,
      main10,
      main11,
      main12,
      main13,
      main14,
      main15,
      main16,
      main17,
      main18,
      main19,
      main20,
      main21,
      main22,
      main23,
      main24
    );
    editor.execute(new AddObjectCommand(editor, Panelcontainer));
    
    
  });
  container.add(scale2);

  // const local = new UICheckbox(false);
  // local.dom.title = strings.getKey('toolbar/local');
  // local.onChange(function() {

  //     signals.spaceChanged.dispatch(this.getValue() === true ? 'local' : 'world');

  // });
  // container.add(local);

  ////Panel
  const doorIcon = document.createElement("img");
  doorIcon.title = strings.getKey("toolbar/Steel Door");
  doorIcon.src = "images/door.svg";

  const btnDoor = new UIButton();
  btnDoor.dom.appendChild(doorIcon);
  btnDoor.onClick(function () {
    let cubeGeo = new THREE.BoxGeometry(10, 10, 1);
    let cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xe7e8e8 });
    const door1 = new THREE.Mesh(cubeGeo, cubeMaterial);
    door1.position.set(5, 5, 0);
    door1.name = "Door";

    cubeGeo = new THREE.BoxGeometry(1, 1, 1);
    cubeMaterial = new THREE.MeshLambertMaterial({ color: 0x000000 });

    let door2 = new THREE.Mesh(cubeGeo, cubeMaterial);
    door2.position.set(1, 1, 0.8);
    door2.name = "door2";

    // Positioning door3 in the top left
    let door3 = new THREE.Mesh(cubeGeo, cubeMaterial);
    door3.position.set(1, 9, 0.8);
    door3.name = "door3";

    // Positioning door4 in the middle right
    let door4 = new THREE.Mesh(cubeGeo, cubeMaterial);
    door4.position.set(9, 5, 0.8);
    door4.name = "door4";

    // Add the doors to the scene
    // mesh.add(door2);
    // mesh.add(door3);
    // mesh.add(door4);

    let doorContainer = new THREE.Group();
    doorContainer.name="DoorContainer";

    doorContainer.add(door1, door2, door3, door4);
    console.log(object.name);

    // mesh.name = 'Steel Door';
    editor.execute(new AddObjectCommand(editor, doorContainer));
  });
  container.add(btnDoor);
  ////Glass Door
  const GdoorIcon = document.createElement("img");
  GdoorIcon.title = strings.getKey("toolbar/Glass Door");
  GdoorIcon.src = "images/door.svg";

  const btnGDoor = new UIButton();
  btnGDoor.dom.appendChild(GdoorIcon);
  btnGDoor.onClick(function () {
    let cubeGeo = new THREE.BoxGeometry(barSize, barSize, barSize);
    let cubeMaterial = new THREE.MeshLambertMaterial({ color: 0x000000 });
    const mesh = new THREE.Mesh(cubeGeo, cubeMaterial);
    mesh.name = "Glass Door";

    let doorG6 = new THREE.Mesh(cubeGeo, cubeMaterial);
    doorG6.position.set(1, 4, 1);
    doorG6.name = "doorG6";

    let doorG7 = new THREE.Mesh(cubeGeo, cubeMaterial);
    doorG7.position.set(1, 9, 1);
    doorG7.name = "doorG7";

    let doorG8 = new THREE.Mesh(cubeGeo, cubeMaterial);
    doorG8.position.set(10, 6.5, 1);
    doorG8.name = "doorG8";

    cubeGeo = new THREE.BoxGeometry(glassDoorBar, modSize, barSize);
    cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xe7e8e3 });

    let doorG1 = new THREE.Mesh(cubeGeo, cubeMaterial);
    doorG1.position.set(10, 6.5, 0);
    doorG1.name = "doorG1";

    let doorG2 = new THREE.Mesh(cubeGeo, cubeMaterial);
    doorG2.position.set(0, 6.5, 0);
    doorG2.name = "doorG2";

    cubeGeo = new THREE.BoxGeometry(11, barSize, barSize);

    let doorG3 = new THREE.Mesh(cubeGeo, cubeMaterial);
    doorG3.position.set(5, 11.5, 0);
    doorG3.name = "doorG3";

    let doorG4 = new THREE.Mesh(cubeGeo, cubeMaterial);
    doorG4.position.set(5, 1.5, 0);
    doorG4.name = "doorG4";

    cubeGeo = new THREE.BoxGeometry(modSize, modSize, barSize);
    cubeMaterial = new THREE.MeshLambertMaterial({
      color: 0xe7e8e3,
      transparent: true,
      opacity: 0.7,
    });

    let doorG5 = new THREE.Mesh(cubeGeo, cubeMaterial);
    doorG5.position.set(5, 6.5, 0);
    doorG5.name = "doorG5";

    let glassDoorContainer = new THREE.Group();

    glassDoorContainer.add(
      doorG6,
      doorG7,
      doorG8,
      doorG1,
      doorG2,
      doorG3,
      doorG4,
      doorG5
    );

    // doorContainer.add(door1, door2, door3, door4);

    // mesh.name = 'Steel Door';
    editor.execute(new AddObjectCommand(editor, glassDoorContainer, mesh));
  });
  container.add(btnGDoor);

  //Adjecnt Door
  const AdoorIcon = document.createElement("img");
  AdoorIcon.title = strings.getKey("toolbar/Adjecnt Door");
  AdoorIcon.src = "images/door.svg";

  const btnADoor = new UIButton();
  btnADoor.dom.appendChild(AdoorIcon);
  btnADoor.onClick(function () {
    cubeGeo = new THREE.BoxGeometry(modSize, modSize, barSize);
    cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xe7e8e8 });

    doorA1 = new THREE.Mesh(cubeGeo, cubeMaterial);
    doorA1.position.set(5, 6.5, 6);
    doorA1.name = "doorA1";

    doorA2 = new THREE.Mesh(cubeGeo, cubeMaterial);
    doorA2.position.set(13, 6.5, 6);
    doorA2.name = "doorA2";

    cubeGeo = new THREE.BoxGeometry(barSize, barSize, barSize);
    cubeMaterial = new THREE.MeshLambertMaterial({ color: 0x000000 });

    doorA3 = new THREE.Mesh(cubeGeo, cubeMaterial);
    doorA3.position.set(1, 4, 7);
    doorA3.name = "doorA3";

    doorA4 = new THREE.Mesh(cubeGeo, cubeMaterial);
    doorA4.position.set(1, 9, 7);
    doorA4.name = "doorA4";

    doorA5 = new THREE.Mesh(cubeGeo, cubeMaterial);
    doorA5.position.set(8, 6.5, 7);
    doorA5.name = "doorA5";

    doorA6 = new THREE.Mesh(cubeGeo, cubeMaterial);
    doorA6.position.set(17, 4, 7);
    doorA6.name = "doorA6";

    doorA7 = new THREE.Mesh(cubeGeo, cubeMaterial);
    doorA7.position.set(17, 9, 7);
    doorA7.name = "doorA7";

    doorA8 = new THREE.Mesh(cubeGeo, cubeMaterial);
    doorA8.position.set(9.5, 6.5, 7);
    doorA8.name = "doorA8";

    ajecentDoorContainer = new THREE.Group();

    ajecentDoorContainer.add(
      doorA1,
      doorA2,
      doorA3,
      doorA4,
      doorA5,
      doorA6,
      doorA7,
      doorA8
    );

    editor.execute(new AddObjectCommand(editor, ajecentDoorContainer));
  });
  container.add(btnADoor);

  //Covers
  const coverIcon = document.createElement("img");
  coverIcon.title = strings.getKey("toolbar/Cover");
  coverIcon.src = "images/cover.svg";

  const btnCover = new UIButton();
  btnCover.dom.appendChild(coverIcon);
  btnCover.onClick(function () {
    let cubeGeo = new THREE.BoxGeometry(barSize / 4, modSize, modSize);
    let cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xe7e8e8 });

    let mesh = new THREE.Mesh(cubeGeo, cubeMaterial);
    mesh.position.set(0, 0, 0);
    mesh.name = "coverLR";

    let mesh2 = new THREE.Mesh(cubeGeo, cubeMaterial);
    mesh2.position.set(0, 0, 0);
    mesh2.name = "coverLR";

    mesh.add(mesh2);

    editor.execute(new AddObjectCommand(editor, mesh));
  });
  container.add(btnCover);

  //Splitter
  const splitterIcon = document.createElement("img");
  splitterIcon.title = strings.getKey("toolbar/Splitter");
  splitterIcon.src = "images/splitter.svg";

  const btnSplitter = new UIButton();
  btnSplitter.dom.appendChild(splitterIcon);
  btnSplitter.onClick(function () {
    cubeGeo = new THREE.BoxGeometry(barSize, barSize, modSize);
    cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xe7e8e3 });

    spliterV1 = new THREE.Mesh(cubeGeo, cubeMaterial);
    spliterV1.position.set(5, 11.5, 6);
    spliterV1.name = "spliterV1";

    spliterV3 = new THREE.Mesh(cubeGeo, cubeMaterial);
    spliterV3.position.set(5, 1.5, 6);
    spliterV3.name = "spliterV3";

    cubeGeo = new THREE.BoxGeometry(barSize, modSize, barSize);

    spliterV5 = new THREE.Mesh(cubeGeo, cubeMaterial);
    spliterV5.position.set(5, 6.5, 11);
    spliterV5.name = "spliterV5";

    spliterV7 = new THREE.Mesh(cubeGeo, cubeMaterial);
    spliterV7.position.set(5, 6.5, 1);
    spliterV7.name = "spliterV7";

    spliterVContainer = new THREE.Group();

    spliterVContainer.add(spliterV1, spliterV3, spliterV5, spliterV7);

    editor.execute(new AddObjectCommand(editor, spliterVContainer));
  });

  container.add(btnSplitter);

  //LCover
  const LCoverIcon = document.createElement("img");
  LCoverIcon.title = strings.getKey("toolbar/Louver Cover");
  LCoverIcon.src = "images/lCover.svg";

  const btnLCover = new UIButton();
  btnLCover.dom.appendChild(LCoverIcon);
  btnLCover.onClick(function () {
    cubeGeo = new THREE.BoxGeometry(barSize * 2, modSize, barSize);
    cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xe7e8e8 });

    lCoverFB1 = new THREE.Mesh(cubeGeo, cubeMaterial);
    lCoverFB1.position.set(18, 4, 6);
    lCoverFB1.name = "lCoverFB1";

    lCoverFB2 = new THREE.Mesh(cubeGeo, cubeMaterial);
    lCoverFB2.position.set(0, 4, 6);
    lCoverFB2.name = "lCoverFB2";

    cubeGeo = new THREE.BoxGeometry(modSize * 2, barSize * 2, barSize);

    lCoverFB3 = new THREE.Mesh(cubeGeo, cubeMaterial);
    lCoverFB3.position.set(9, 0, 6);
    lCoverFB3.name = "lCoverFB3";

    lCoverFB4 = new THREE.Mesh(cubeGeo, cubeMaterial);
    lCoverFB4.position.set(9, 8, 6);
    lCoverFB4.name = "lCoverFB4";

    cubeGeo = new THREE.BoxGeometry(18, modSize, 0.5);
    cubeMaterial = new THREE.MeshLambertMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.7,
    });

    lCoverFB5 = new THREE.Mesh(cubeGeo, cubeMaterial);
    lCoverFB5.position.set(9, 4, 6);
    lCoverFB5.name = "lCoverFB5";

    louverCoverContainer = new THREE.Group();

    louverCoverContainer.add(
      lCoverFB1,
      lCoverFB2,
      lCoverFB3,
      lCoverFB4,
      lCoverFB5
    );

    editor.execute(new AddObjectCommand(editor, louverCoverContainer));
  });

  container.add(btnLCover);

  //Cable Gland
  const CGlandIcon = document.createElement("img");
  CGlandIcon.title = strings.getKey("toolbar/Cable Gland");
  CGlandIcon.src = "images/CGland.svg";

  const btnCGland = new UIButton();
  btnCGland.dom.appendChild(CGlandIcon);
  btnCGland.onClick(function () {
    cubeGeo = new THREE.BoxGeometry(modSize * 2, barSize / 2, modSize);
    cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xe7e8e8 });

    cableGland1 = new THREE.Mesh(cubeGeo, cubeMaterial);
    cableGland1.position.set(10, 12.7, 6);
    cableGland1.name = "cableGland1";

    cubeGeo = new THREE.BoxGeometry(7, barSize / 2, glassDoorBar * 2);
    cubeMaterial = new THREE.MeshLambertMaterial({ color: 0x71797e });

    cableGland2 = new THREE.Mesh(cubeGeo, cubeMaterial);
    cableGland2.position.set(15, 13.2, 6);
    cableGland2.name = "cableGland2";

    cableGland3 = new THREE.Mesh(cubeGeo, cubeMaterial);
    cableGland3.position.set(5, 13.2, 6);
    cableGland3.name = "cableGland3";

    cableGlandContainer = new THREE.Group();

    cableGlandContainer.add(cableGland1, cableGland2, cableGland3);

    editor.execute(new AddObjectCommand(editor, cableGlandContainer));
  });

  container.add(btnCGland);

  //Mounting Plates
  const MPlate = document.createElement("img");
  MPlate.title = strings.getKey("toolbar/Mounting Plate");
  MPlate.src = "images/Mplate.svg";

  const btnMPlate = new UIButton();
  btnMPlate.dom.appendChild(MPlate);
  btnMPlate.onClick(function () {
    cubeGeo = new THREE.BoxGeometry(10, 20, 1);
    cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xe7e8e8 });

    mPlates1 = new THREE.Mesh(cubeGeo, cubeMaterial);
    mPlates1.position.set(5, 9.3, 0);
    mPlates1.name = "mPlates1";

    cubeGeo = new THREE.BoxGeometry(barSize, barSize, barSize);
    cubeMaterial = new THREE.MeshLambertMaterial({ color: 0x0000000 });

    mPlates2 = new THREE.Mesh(cubeGeo, cubeMaterial);
    mPlates2.position.set(9.5, 18.8, 0.5);
    mPlates2.name = "mPlates2";

    mPlates3 = new THREE.Mesh(cubeGeo, cubeMaterial);
    mPlates3.position.set(9.5, 0, 0.5);
    mPlates3.name = "mPlates3";

    mPlates4 = new THREE.Mesh(cubeGeo, cubeMaterial);
    mPlates4.position.set(0.5, 18.8, 0.5);
    mPlates4.name = "mPlates4";

    mPlates5 = new THREE.Mesh(cubeGeo, cubeMaterial);
    mPlates5.position.set(0.5, 0, 0.5);
    mPlates5.name = "mPlates5";

    mountingPlateContainer = new THREE.Group();

    mountingPlateContainer.add(
      mPlates1,
      mPlates2,
      mPlates3,
      mPlates4,
      mPlates5
    );

    editor.execute(new AddObjectCommand(editor, mountingPlateContainer));
  });

  container.add(btnMPlate);

  //Din Modules
  const DinModIcon = document.createElement("img");
  DinModIcon.title = strings.getKey("toolbar/Din Module");
  DinModIcon.src = "images/DinMod.svg";

  const btnDinMod = new UIButton();
  btnDinMod.dom.appendChild(DinModIcon);
  btnDinMod.onClick(function () {
    cubeGeo = new THREE.BoxGeometry(barSize * 2, modSize / 2, barSize / 2);
    cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xe7e8e8 });

    dinModels1 = new THREE.Mesh(cubeGeo, cubeMaterial);
    dinModels1.position.set(19, 2, 6);
    dinModels1.name = "dinModels1";

    dinModels2 = new THREE.Mesh(cubeGeo, cubeMaterial);
    dinModels2.position.set(1, 2, 6);
    dinModels2.name = "dinModels2";

    cubeGeo = new THREE.BoxGeometry(modSize * 2, barSize * 2, barSize / 2);

    dinModels3 = new THREE.Mesh(cubeGeo, cubeMaterial);
    dinModels3.position.set(10, 0, 6);
    dinModels3.name = "dinModels3";

    dinModels4 = new THREE.Mesh(cubeGeo, cubeMaterial);
    dinModels4.position.set(10, 4, 6);
    dinModels4.name = "dinModels4";

    cubeMaterial = new THREE.MeshLambertMaterial({ color: 0x808080 });

    dinModels7 = new THREE.Mesh(cubeGeo, cubeMaterial);
    dinModels7.position.set(10, 2, 1);
    dinModels7.name = "dinModels7";

    cubeGeo = new THREE.BoxGeometry(barSize / 2, barSize * 2, modSize / 2);

    dinModels5 = new THREE.Mesh(cubeGeo, cubeMaterial);
    dinModels5.position.set(19.8, 2, 3.5);
    dinModels5.name = "dinModels5";

    dinModels6 = new THREE.Mesh(cubeGeo, cubeMaterial);
    dinModels6.position.set(0.2, 2, 3.5);
    dinModels6.name = "dinModels6";

    dinModelContainer = new THREE.Group();

    dinModelContainer.add(
      dinModels1,
      dinModels2,
      dinModels3,
      dinModels4,
      dinModels5,
      dinModels6,
      dinModels7
    );

    editor.execute(new AddObjectCommand(editor, dinModelContainer));
  });

  container.add(btnDinMod);

  //Bus Bar Holder
  const BBHolderIcon = document.createElement("img");
  BBHolderIcon.title = strings.getKey("toolbar/Bus Bar Holder");
  BBHolderIcon.src = "images/BBholder.svg";

  const btnBBHolder = new UIButton();
  btnBBHolder.dom.appendChild(BBHolderIcon);
  btnBBHolder.onClick(function () {
    cubeGeo = new THREE.BoxGeometry(glassDoorBar, barSize, modSize * 2);
    cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xe7e8e8 });

    bbHolder1 = new THREE.Mesh(cubeGeo, cubeMaterial);
    bbHolder1.position.set(0, 8.2, 10);
    bbHolder1.name = "bbHolder1";

    bbHolder2 = new THREE.Mesh(cubeGeo, cubeMaterial);
    bbHolder2.position.set(0, 1.2, 10);
    bbHolder2.name = "bbHolder2";

    cubeGeo = new THREE.CylinderGeometry(0.5, 0.5, 5, 3, 2);
    cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xa2a18d });

    bbHolder3 = new THREE.Mesh(cubeGeo, cubeMaterial);
    bbHolder3.position.set(0, 4.7, 19);
    bbHolder3.name = "bbHolder3";

    bbHolder4 = new THREE.Mesh(cubeGeo, cubeMaterial);
    bbHolder4.position.set(0, 4.7, 15);
    bbHolder4.name = "bbHolder4";

    bbHolder5 = new THREE.Mesh(cubeGeo, cubeMaterial);
    bbHolder5.position.set(0, 4.7, 10);
    bbHolder5.name = "bbHolder5";

    bbHolder6 = new THREE.Mesh(cubeGeo, cubeMaterial);
    bbHolder6.position.set(0, 4.7, 5);
    bbHolder6.name = "bbHolder6";

    bbHolder7 = new THREE.Mesh(cubeGeo, cubeMaterial);
    bbHolder7.position.set(0, 4.7, 1);
    bbHolder7.name = "bbHolder7";

    cubeGeo = new THREE.BoxGeometry(2, 1, 20);
    cubeMaterial = new THREE.MeshLambertMaterial({ color: 0x969fa6 });

    bbHolder8 = new THREE.Mesh(cubeGeo, cubeMaterial);
    bbHolder8.position.set(0, 7.2, 10);
    bbHolder8.name = "bbHolder8";

    bbHolder9 = new THREE.Mesh(cubeGeo, cubeMaterial);
    bbHolder9.position.set(0, 2.2, 10);
    bbHolder9.name = "bbHolder9";

    busBarHContainer = new THREE.Group();

    busBarHContainer.add(
      bbHolder1,
      bbHolder2,
      bbHolder3,
      bbHolder4,
      bbHolder5,
      bbHolder6,
      bbHolder7,
      bbHolder8,
      bbHolder9
    );

    editor.execute(new AddObjectCommand(editor, busBarHContainer));
  });

  container.add(btnBBHolder);

  //Bus Bar
  const BBarIcon = document.createElement("img");
  BBarIcon.title = strings.getKey("toolbar/Bus Bar");
  BBarIcon.src = "images/busbar.svg";

  const btnBBar = new UIButton();
  btnBBar.dom.appendChild(BBarIcon);
  btnBBar.onClick(function () {
    let bBar1, bBar2, bBar3, bBar4;

    console.log("Bus bar");
    cubeGeo = new THREE.BoxGeometry(modSize * 2, glassDoorBar, barSize);
    cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xb87333 });

    bBar1 = new THREE.Mesh(cubeGeo, cubeMaterial);
    bBar1.position.set(10, 1.5, 15);
    bBar1.name = "bBar1";

    bBar2 = new THREE.Mesh(cubeGeo, cubeMaterial);
    bBar2.position.set(10, 1.5, 10);
    bBar2.name = "bBar2";

    bBar3 = new THREE.Mesh(cubeGeo, cubeMaterial);
    bBar3.position.set(10, 1.5, 5);
    bBar3.name = "bBar3";

    bBar4 = new THREE.Mesh(cubeGeo, cubeMaterial);
    bBar4.position.set(10, 1.5, 0);
    bBar4.name = "bBar4";

    let busBarHContainer = new THREE.Group();

    busBarHContainer.add(bBar1, bBar2, bBar3, bBar4);
    busBarHContainer.name = "Bus Bar";

    busBarHContainer.add(bBar1, bBar2, bBar3, bBar4);

    editor.execute(new AddObjectCommand(editor, busBarHContainer));
  });

  container.add(btnBBar);

  signals.transformModeChanged.add(function (mode) {
    translate.dom.classList.remove("selected");
    rotate.dom.classList.remove("selected");
    scale.dom.classList.remove("selected");

    switch (mode) {
      case "translate":
        translate.dom.classList.add("selected");
        break;
      case "rotate":
        rotate.dom.classList.add("selected");
        break;
      case "scale":
        scale.dom.classList.add("selected");
        break;

      case "Panel":
        scale2.dom.classList.add("selected");
        break;
    }
  });

  return container;
}

export { Toolbar };
