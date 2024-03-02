class Selector {

	constructor( editor ) {

		const signals = editor.signals;

		this.editor = editor;
		this.signals = signals;

		// signals

		signals.intersectionsDetected.add( ( intersects ) => {

			if ( intersects.length > 0 ) {

				const object = intersects[ 0 ].object;

				if ( object.userData.object !== undefined ) {

					// helper

					this.select( object.userData.object );

				} else {

					this.select( object );

				}

			} else {

				this.select( null );

			}

		} );

	}

	select(object) {
        if (this.editor.selected === object) return;
    
        let selectedObject = object;
    
        // Check if the selected object is a child of a group
        if (object !== null && object.parent instanceof THREE.Group) {
            // Select the parent group instead
            selectedObject = object.parent;
        }
    
        let uuid = null;
    
        if (selectedObject !== null) {
            uuid = selectedObject.uuid;
        }
    
        this.editor.selected = selectedObject;
        this.editor.config.setKey('selected', uuid);
    
        this.signals.objectSelected.dispatch(selectedObject);
    }
    

	deselect() {

		this.select( null );

	}

}

export { Selector };
