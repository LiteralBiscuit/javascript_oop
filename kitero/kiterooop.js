class Student{
    constructor(name){
        this.name = name;
        this.askedQuestionNumber = 0;
    }
    askQuestion(){
        console.log("???");
        this.askedQuestionNumber ++;
    }
}
const stu1 = new Student("POV: Mát");
stu1.askQuestion();
console.log(stu1);

class StudentWithWork extends Student{
    constructor(name){
        super(name);
        this.workDone = 0;
    }
    doWork(){
        this.workDone ++;
    }
}
const stu2 = new StudentWithWork("Gumiszakadás");
stu2.askQuestion();
stu2.doWork();
console.log(stu2);