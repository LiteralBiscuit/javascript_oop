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
import { ViewElement } from "./View.js";

import data from "./data.json" with {type: "json"};