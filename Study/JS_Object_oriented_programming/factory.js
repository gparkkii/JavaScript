let kim = {
    name : 'kim',
    first : 10,
    second : 20,
    third : 30,
    sum : function() {
        return this.first + this.second;
    }
}

let lee = {
    name : 'lee',
    first : 10,
    second : 10,
    third : 10,
    sum : function() {
        return this.first + this.second;
    }
}
console.log('kim.sum()', kim.sum());
console.log('lee.sum()', lee.sum());


const myDate = new Date('2020-11-23');
console.log('myDate.getFullYear', myDate.getFullYear());
console.log('myDate.getMonth + 1', myDate.getMonth() + 1);
console.log('myDate.getDate', myDate.getDate());
// myDate.getFullYear 2020
// myDate.getMonth + 1 11
// myDate.getDate 23

function Person() {
    this.name = 'Park';
    this.age = 28;
    this.height = 158;
    this.sum = function(){
        return this.age + this.height;
    }
}
console.log('Person()', Person());
// Person() undefined
console.log('new Person()', new Person());
/* new Person() Person {
     name: 'Park',
     age: '28',
     height: '158',
     sum: [Function (anonymous)]
   }  */

