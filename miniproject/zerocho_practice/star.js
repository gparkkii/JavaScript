
// 별찍기 1 ~ 5
let n = 1
while(n <= 5){
    console.log('*'.repeat(n));
    n ++
}  
// 별찍기 5 ~ 1
let n = 0
while(n <= 5){
    console.log('*'.repeat(5 - n));
    n --
}  

// 공백포함 별찍기
let n = 1
while(n <= 5){
    console.log(' '.repeat(5 - n) + '*'.repeat(n))
    n++
}

// 별찍기 13531
let n = 4
while(n >= -4){
    console.log('*'.repeat(5 - Math.abs(n)))
    n -= 2
}

// 별찍기 다이아몬드
let n = 4
while(n >= -4){
    console.log(' '.repeat(Math.abs(n)/2) + '*'.repeat(5 - Math.abs(n)))
    n -= 2
}

// 별찍기 앞 공백, 뒤 별 13531
/*
    *
  ***
*****
  ***
    *
*/

// 5 3 1 공백포함
/*
*****
 ***
  *
*/ 

// 1 5 9 5 1
/*
    *
  *****
*********    
  *****
    *
*/

/*
    *
  ** **
***   ***    
  ** **
    *
*/


