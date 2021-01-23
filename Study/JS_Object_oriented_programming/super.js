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
    constructor(name,age,height,weight){
        super(name,age,height);
        this.weight = weight;
    }
    sum() {
        return super.sum() + this.weight;
    }
    avg() {
        return (super.sum() + this.weight) / 2;
    }
}
const kim = new PersonPlus('kim', 41, 154, 23);
console.log(kim.sum(),kim.avg());
// 218 , 109





