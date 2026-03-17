/**
 * @typedef {{question: string, answers: string[]}} QuestionViewType
 * @typedef {{question: string, answers: string[], rightAnswer: string}} QuestionType
 * @callback NextQuestionCallback
 * @param {QuestionViewType} question
 * @returns {void}
 * @callback FinishResultCallback
 * @param {string} result
 * @returns {void}
 */
class QuizManager{
    /**
     * @type {number}
     */
    #currentQuestionNumber;
    /**
     * @type { QuestionType []}
     */
    #questions;
    /**
     * @type {string[]}
     */
    #questionAnswers;
    /**
     * @type {NextQuestionCallback}
     */
    #nextQuestionCallback;
    /**
     * @type {FinishResultCallback}
     */
    #finishResultCallback;

    /**
     * 
     * @param {QuestionType[]} questions 
     */
    constructor(questions){
        this.#currentQuestionNumber = 0;
        this.#questionAnswers = [];
        this.#questions = questions;
    }
    startQuiz(){
        this.#nextQuestionCallback(this.#questions[this.#currentQuestionNumber]);
    }
    /**
     * 
     * @param {string} answer 
     * @returns {void}
     */
    nextQuestion(answer){
        let db = 0;
        this.#questionAnswers.push(answer);
        if(this.#currentQuestionNumber < this.#questions.length - 1){
            this.#currentQuestionNumber ++;
            this.#nextQuestionCallback(this.#questions[this.#currentQuestionNumber]);
        }
        else{
            for (let i = 0; i < this.#questionAnswers.length; i++) {
                if(this.#questionAnswers[i] == this.#questions[i].rightAnswer)
                    db++;
            }
            this.#finishResultCallback("Ennyit sikerült eltalálni: " + this.#questions.length + "/" + db)
        }
    }
    /**
     * @param {nextQuestionCallback} value 
     */
    set nextQuestionCallback(value){
        this.#nextQuestionCallback = value;
    }
    /**
     * @param {FinishResultCallback} value 
     */
    set finishResultCallback(value){
        this.#finishResultCallback = value;
    }
}
export {QuizManager}