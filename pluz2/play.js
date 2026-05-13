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

class PlayArea{
    /**
     * @type {HTMLDivElement}
     */
    #div;
    /**
     * @type {SelectManager}
     */
    #manager;

    /**
     * @param {SelectManager} manager 
     */
    constructor(manager){
        this.#manager = manager;
        this.#div = document.createElement("div");
    }

    /**
     * 
     * @param {HTMLElement} parent 
     */
    replaceContent(parent){
        parent.innerHTML = "";
        parent.appendChild(this.#div);
    }
    get manager(){
        return this.#manager;
    }
    get div(){
        return this.#div
    }
}

class CardArea extends PlayArea{
    /**
     * 
     * @param {SelectManager} manager 
     */
    constructor(manager){
        super(manager);
        const buttonTrue = document.createElement("button");
        this.div.appendChild(buttonTrue);
        const buttonFalse = document.createElement("button");
        this.div.appendChild(buttonFalse);

        buttonTrue.addEventListener("click", () =>{
            manager.NextQuestion(true);
        })
        buttonFalse.addEventListener("click", () =>{
            manager.nextQuestion(false);
        })
    }
}

class ResultArea extends PlayArea{

} 