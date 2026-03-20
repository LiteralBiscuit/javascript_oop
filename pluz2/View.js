/**
 * @typedef {{question : string, valid : boolean}} QuestionType
 * @typedef {{question : string}} QuestionViewType
 * @typedef {{question : string, selected : boolean, rightAnswer : boolean}} QuestionResultViewType
 * 
 * @callback NextQuestionCallback
 * @param {QuestionType} question
 * @returns {void}
 * 
 * @callback FinishCallback
 * @param {QuestionResultViewType[]} resultArray
 * @returns {void}
 */

import { SelectManager } from "./SelectManager.js";

class ViewElement{
    /**
     * @type {SelectManager}
     */
    #manager;
    /**
     * @type {HTMLDivElement}
     */
    #container;

    /**
     * 
     * @param {SelectManager} manager 
     */
    constructor(manager){
        this.#manager = manager;
    }
    /**
     * 
     * @param {HTMLElement} parent 
     */
    appendTo(parent){
        parent.appendChild(this.#container);
    }
}

export {ViewElement};