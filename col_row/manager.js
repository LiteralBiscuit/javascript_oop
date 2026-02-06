/**
 * @import {functions.js}
 * 
 * @callback callback
 * @param {ColspanType | RowspanType} param
 * @returns {void}
 */

class Manager{
    /**
     * @type {ColspanType[] | RowspanType[]}
     */
    #tableArray;
    /**
     * @type {callback}
     */
    #addCallback;
    constructor(){
        this.#tableArray = [];
    }
    /**
     * @param {ColspanType | RowspanType} element
     * @returns {void} 
     */
    addElement(element){
        this.#tableArray.push(element);
        if(this.#addCallback){
            this.#addCallback(element);
        }
    }
    /**
     * @param {callback} callback 
     */
    set setCallback(callback){
        this.#addCallback = callback;
    }

}

export {Manager};