import { createRadioButton } from "./gomszab.min.js";
import {ViewElement} from "./viewElement.js"
class NavBar extends ViewElement{ //navbar class
    /**
     * @type {ViewElement[]}
     */
    #viewElementList; // viewelementek listája (table, form, import/export)
    /**
     * @override
     * @param {string} value 
     */
    activate(value){ // ős definiál egy activate() at (viewelement.activate()) de a navbarban más logikát kell tartalmazzon
        for(const elemnt of this.#viewElementList){  // activate all viewelements
            elemnt.activate(value);
        }
        this.div.querySelector(`#${value}`).checked = true; // a divből lekérjük a bementivel azonos elemet és
    }
    /**
     * 
     * @param {ViewElement} element 
     * @param {string} label  //ezb egy id?
     */
    addViewElement(label ,element){ //navbarnak függvény
        this.#viewElementList.push(element); //bementi elem push to list
        const div = createRadioButton({id: element.id, name: this.id, label : label}) // radio aminek id-je a viewelement id-je (param)
        // a  anme a navbar id-je mert a radiogomboknál ha azonos a name, cvsak egy választható ki
        this.div.appendChild(div); //hazzádjuk az ősdivjez a radiogombot
    }
    constructor(){
        super("navbar"); // meghívja az ős konstruktort
        this.#viewElementList = [];
        this.div.addEventListener('change', (e) =>{ //div change event listener (mivel a divben radiogombok vannak ezért tudjuk figyelni a divnél, hogy melyik radio gomb lesz kijelölve) /ősosztály divje
            const radioValue = e.target.value; // elkérjük a target value értéket (string ami id)
            this.activate(radioValue); // activate() a radiogomb értékével ami egy viewelement id see viewelement
        }) // navbarnál felülírjuk az activatet a többinél nem
        // minden egy viewelement de a navbar egy kicsit más, de a viewelement amúgy az actual content
    }
}

export {NavBar}