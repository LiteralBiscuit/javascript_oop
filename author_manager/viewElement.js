import {show, hide} from "./gomszab.min.js"
/**
 * @callback activateCallback
 * @returns {void}
 */
class ViewElement{ // ősosztály a megjelítendő viewknak
    /**
     * @type {HTMLDivElement}
     */
    #div; //
    /**
     * @type {string}
     */
    #id; //ostály példány tul navigációkor használatos
    /**
     * @type {activateCallback}
     */
    #activateCallback //akkor fut le amikor megjelenik az adott elem (optional see activate())

    get div(){
        return this.#div
    }

    /**
     * @param {activateCallback} value 
     */
    set activateCallback(value){
        this.#activateCallback = value; // settteli az activatecallback paramját
    }

    /**
     * 
     * @param {string} id 
     */
    constructor(id){
        this.#id = id; // set id
        this.#div = document.createElement("div"); // create div set div prop
        this.#div.id = id; //set div id
    }

    /**
     * 
     * @param {HTMLElement} parent 
     */
    appendTo(parent){ // függvény a példánynak, a bemenete egy html elem
        parent.appendChild(this.#div); // az elemhez hozzácstoljuk a div propot
    }

    /**
     * 
     * @param {string} id 
     */
    activate(id){ // függvény a példányoknak
        if(this.#id == id){ // id prop == id param
            show(this.#div); // a divtől elveszi a hidden classt
            if(this.#activateCallback){ // ha van 
                this.#activateCallback(); //akkor meghívjuk
            }
        }
        else{ //egyébbként
            hide(this.#div); // add hidden class
        }
    }

    get id(){
        return this.#id;
    }
}

export {ViewElement} // export class