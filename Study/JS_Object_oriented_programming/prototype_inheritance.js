const superObj = {superVal : 'super'},
      subObj = {subVal : 'sub'};
subObj.__proto__ = superObj;
console.log(`subObj.subVal : ${subObj.subVal}`);
// subObj.subVal : sub
console.log(`subObj.superVal : ${subObj.superVal}`);
// subObj.superVal : super

subObj.superVal = 'sub';
console.log(`subObj.superVal : ${subObj.superVal}`);
// subObj.superVal : sub
console.log(`superObj.superVal : ${superObj.superVal}`);
// superObj.superVal : super



const ParentObj = {parentVal : 'parent'},
      ChildObj = Object.create(superObj);
ChildObj.ChildVal = 'child';

console.log(`parentobj : ${ParentObj.parentVal}`);
console.log(`childobj : ${ChildObj.ChildVal}`);
// parentobj : parent
// childobj : child



const kim = {
    name:'kim',
    first: 10, second: 20,
    sum: function(){return this.first + this.second;}
}

const lee = {
    name:'lee',
    first: 10, second: 10,
    avg: function(){return(this.first + this.second)/2;}
}
lee.__proto__ = kim;

const choi = Object.create(lee);
choi.name = 'choi';
choi.first = 30;
choi.second = 60;

console.log(kim.name, lee.name, choi.name);
// kim lee choi
console.log(lee.avg(), choi.avg());
// 10 45





