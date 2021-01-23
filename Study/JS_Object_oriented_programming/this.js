let kim = {
    name : 'kim',
    first : 10,
    second : 20,
    sum : function(f,s) {
        return f+s;
    }
}
console.log('kim.sum(kim.first, kim.second)', kim.sum(kim.first, kim.second));
// kim.sum(kim.first, kim.second) 30

let lee = {
    name : 'kim',
    first : 10,
    second : 20,
    sum : function() {
        return this.first + this.second;
    }
}
console.log('lee.sum()', lee.sum());
// lee.sum() 30