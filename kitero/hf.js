function Tanyer(color, size){
    this.color = color;
    this.size = size;
}
class Pohar{
    constructor(capacity){
        this.capacity = capacity;
    }
}

const plate1 = new Tanyer("orange", "small");
const plate2 = new Tanyer("blue", "small");
const plate3 = new Tanyer("white", "large");
const pohar1 = new Pohar(4);
console.log(plate1);
console.log(plate2);
console.log(plate3);
console.log(pohar1);
