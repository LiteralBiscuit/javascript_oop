/**
 * @typedef {{question: string, answers: string[]}} QuestionViewType
 * @typedef {{question: string, answers: string[], rightAnswer: string}} QuestionType
 */

import { QuizManager } from "./QuizManager.js";

class View{
    /**
     * @type {QuizManager}
     */
    #manager;
    /**
     * @type {HTMLDivElement}
     */
    #container;

    /**
     * 
     * @param {QuizManager} manager 
     */
    constructor(manager){
        this.#manager = manager;
        this.#container = document.createElement("div");
        /**
         * @param {QuestionViewType} question
         */
        this.#manager.nextQuestionCallback = (question) =>{
            this.#container.innerHTML = "";
            const questionDiv = document.createElement("div");
            questionDiv.classList.add("question");
            const span = document.createElement("span");
            span.innerText = question.question;
            questionDiv.appendChild(span);
            this.#container.appendChild(questionDiv);

            const answersDiv = document.createElement("div");
            answersDiv.classList.add("answers");
            for (const answer of question.answers) {
                const answerButton = document.createElement("button");
                answerButton.innerText = answer;
                answerButton.addEventListener("click", (e) =>{
                    e.preventDefault();
                    this.#manager.nextQuestion(answer);
                })
                answersDiv.appendChild(answerButton);
            }
            this.#container.appendChild(answersDiv);

        }
        /**
         * @param {string} result
         */
        this.#manager.finishResultCallback = (result) =>{
            this.#container.innerHTML = "";
            const resultDiv = document.createElement("div");
            resultDiv.classList.add("result");
            resultDiv.innerText = result;
            this.#container.appendChild(resultDiv);
        }
    }

    /**
     * 
     * @param {HTMLElement} parent 
     * @returns {void}
     */
    appendTo(parent){
        parent.appendChild(this.#container);
    }
}

export { View }