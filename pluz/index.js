import { QuizManager } from "./QuizManager.js";
import { View } from "./View.js";
import data from "./data.json" with {type : "json"};

/**
 * @type {QuizManager}
 */
const manager = new QuizManager(data.questions);
/**
 * @type {View}
 */
const view = new View(manager);
view.appendTo(document.body);
manager.startQuiz();