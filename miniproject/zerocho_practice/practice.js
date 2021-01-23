
//함수 만들기

/* 
// 옛날방식
function add(a,b){
  a + b + c
}
*/

// const add = (a,b,c) => {
//   return a + b + c
// }

// console.log(add(1,2,3))


const candidate = Array(45).fill().map((a, b) => b + 1)
const shuffle = []

const random = Math.floor(Math.random() * candidate.length)
const value = candidate.splice(random, 1)[0]
shuffle.push(value)
// console.log('random : ' + random)
// console.log('value :' + value)


[30, 42, 56, 7].sort((a, b) => {
  return a - b
  // a,b 로 40, 7이 선택될을 경우 0보다 작으면 자리를 바꿔준다.
  // 즉  a - b는 오름차순, b - a는 내림차순으로 된다.
})