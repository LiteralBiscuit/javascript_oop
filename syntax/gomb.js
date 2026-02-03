import { muvelet, muveletLetrehoz } from "./functions.js";

class Button{
    constructor(input1, input2, muveletString, eredményDiv){
        this.button = document.createElement("button");
        this.button.innerText = muveletString;
        this.button.addEventListener("click", function(){
            const sz1 = Number(input1.value);
            const sz2 = Number(input2.value);
            const {result} = muvelet(sz1, sz2, muveletLetrehoz(muveletString)); //destructuring
            eredményDiv.innerText = result;
        })
        document.body.appendChild(this.button);
        document.body.appendChild(eredményDiv);
    }
}

export {Button}