add();
//=> 호이스팅 단원. 함수 선언보다 먼저 사용이 가능한 이유.

// 10 + 100의 결과를 출력한다.
function add() {
  let n1 = 10;
  let n2 = 100;
  let result = n1 + n2;
  console.log(`${n1} + ${n2} = ${result}`);
}

// 전달받은 숫자와 100의 합계를 출력한다.
function add100(n1) {
  let n2 = 100;
  let result = n1 + n2;
  console.log(`${n1} + ${n2} = ${result}`);
}

// 전달받은 두 수의 합계를 출력한다.
function sum(n1, n2) {
  let result = n1 + n2;
  console.log(`${n1} + ${n2} = ${result}`);
}

// 전달받은 두 수의 합계를 반환한다.
function sum2(n1, n2) {
  if (isNaN(n1) || isNaN(n2)) throw Error("숫자를 입력해주세요.");
  let result = n1 + n2;
  return `${n1} + ${n2} = ${result}`;
}

add();
add100(20);
sum(30, 40);
console.log(sum2(40, 50));
