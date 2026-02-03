import { muvelet, muveletLetrehoz } from "./functions.js";
import { Button } from "./gomb.js";

const input1 = document.createElement("input");
const input2 = document.createElement("input");
const resultDiv = document.createElement("div");
document.body.appendChild(input1);
document.body.appendChild(input2);
document.body.appendChild(document.createElement("br"));
const button1 = new Button(input1, input2, "+", resultDiv);
const button2 = new Button(input1, input2, "-", resultDiv);
const button3 = new Button(input1, input2, "*", resultDiv);
document.body.appendChild(resultDiv);