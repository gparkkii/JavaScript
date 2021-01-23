function Person(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
}

Person.prototype.sum = function(){
    return `prototype : ${this.age + this.height}`;
}
const kim = new Person('kim', 16, 178);
const lee = new Person('lee', 26, 164);
console.log(kim.sum(),lee.sum());
// prototype : 194 prototype : 190

kim.sum = function() {
    return `this : ${this.age + this.height}`;
}
console.log(kim.sum(),lee.sum());
// this : 194 prototype : 190


