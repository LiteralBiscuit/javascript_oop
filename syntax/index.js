import { muvelet, muveletLetrehoz } from "./functions.js";

const input1 = document.createElement("input");
const input2 = document.createElement("input");
const div = document.createElement("div");
const button = document.createElement("button");
button.innerText = "gombszab";

document.body.appendChild(input1);  
document.body.appendChild(input2);
document.body.appendChild(document.createElement("br"));
document.body.appendChild(button);
document.body.appendChild(div);


button.addEventListener("click", function(){
    const sz1 = Number(input1.value);
    const sz2 = Number(input2.value);
    const {result} = muvelet(sz1, sz2, muveletLetrehoz("+")); //destructuring
    div.innerText = result;
})