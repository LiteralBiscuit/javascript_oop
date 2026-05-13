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

class SelectManager{
    /**
     * @type {number}
     */
    #questionNumber;
    /**
     * @type {QuestionType[]}
     */
    #questions;
    /**
     * @type {boolean[]}
     */
    #questionAnswers;
    /**
     * @type {NextQuestionCallback}
     */
    #nextQuestionCallback;
    /**
     * @type {FinishCallback}
     */
    #finishCallback;

    /**
     * 
     * @param {QuestionType[]} questions 
     */
    constructor(questions){
        this.#questions = questions;
    }
    /**
     * @returns {void}
     */
    play(){

    }
    /**
     * @returns {void}
     */
    reset(){

    }
    /**
     * @param {boolean} answer
     */
    nextQuestion(answer){
        
    }
    /**
     * @param {NextQuestionCallback} value 
     */
    set nextQuestionCallback(value){
        this.#nextQuestionCallback = value;
    }
}

export {SelectManager}