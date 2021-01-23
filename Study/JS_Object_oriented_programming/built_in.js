// 1) 자바스크립트 내장함수
console.log('Math.PI', Math.PI);
// Math.PI 3.141592653589793

// 2) 내가 만든 객체
let MyMath = {
    PI : '3.141592653589793',
    Plus : function(a,b) {
        return a + b;
    },
    Squared : function(c) {
        return c*c;
    }
}

console.log('MyMath.PI', MyMath.PI);
// MyMath.PI 3.141592653589793
console.log('MyMath.Plus', MyMath.Plus(10,20));
// MyMath.Plus 30
console.log('MyMath.Squared', MyMath.Squared(30));
// MyMath.Squared 900



