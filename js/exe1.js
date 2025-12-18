// exe1.js
//math.random() 함수. 0 <= x < 1
// math.ceil() : 4.56745 => 5
// math.floor() : 4.56745 => 4
let x = Math.random() * 10;
console.log(Math.ceil(x));
// console.log(Math.floor(x));
let y = Math.ceil(x)
console.log('y=> '+y);

// 임의의 값이 5보다 큰지 => true, false
// true, false 구문이 콘솔출력.
console.log(y > 5);

// 짝수인지 => true, false 출력.
console.log(y % 2 ==0);

