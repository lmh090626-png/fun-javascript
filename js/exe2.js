// exe2.js
// 가위바위보 게임.
// 1(가위),2(바위),3(보)
// 시스템: 1~3, 사용자: 1~3
// You Win!/ You Lost!/ You Same! 구문을 출력.

// exe2.js
// 가위바위보 게임
// 1(가위), 2(바위), 3(보)
// 시스템: 1~3, 사용자: 1~3
// You Win! / You Lost! / You Same! 구문 출력

// 입력
let user = prompt("가위바위보 게임!\n1: 가위, 2: 바위, 3: 보\n숫자를 입력하세요");
user = Number(user);

// 시스템 랜덤 값 (1~3)
let system = Math.floor(Math.random() * 3) + 1;

// 결과 
if (user === system) {
console.log("You Same!");
} else if (
(user === 1 && system === 3) || // 가위 > 보
(user === 2 && system === 1) || // 바위 > 가위
(user === 3 && system === 2) // 보 > 바위
) {
console.log("You Win!");
} else {
console.log("You Lost!");
}







