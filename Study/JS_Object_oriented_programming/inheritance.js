class Person {
    constructor(name, age, height){
        this.name = name;
        this.age = age;
        this.height = height;
    }
    sum() {
        return this.age + this.height;
    }
}

class PersonPlus extends Person{
    avg() {
        return (this.age + this.height) / 2;
    }
}
const kim = new PersonPlus('kim', 41, 154);
console.log(kim.sum(),kim.avg());
// prototype : 195 prototype : 97.5












