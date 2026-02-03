import { muvelet, muveletLetrehoz } from "./functions.js";

class Button{
    constructor(input1, input2, muveletString, eredmenyDiv){
        this.muveletString = muveletString;
        this.button = document.createElement("button");
        this.button.innerText = muveletString;
        this.button.addEventListener("click", () =>{this.#calculate(input1, input2, eredmenyDiv)});
        document.body.appendChild(this.button);
    }

    #calculate(input1, input2, eredmenyDiv){
        const sz1 = Number(input1.value);
        const sz2 = Number(input2.value);
        const {result} = muvelet(sz1, sz2, muveletLetrehoz(this.muveletString)); //destructuring
        eredmenyDiv.innerText = result;
    }
}

export {Button}