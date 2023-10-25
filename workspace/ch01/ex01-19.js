// 지정한 두 값의 최대값을 반환한다.
function max(n1, n2) {
  // let maxNum;
  if (n1 > n2) {
    var maxNum = n1;
    // maxNum = n1;
  } else {
    var maxNum = n2;
    // maxNum = n2;
  }
  return maxNum;
}

console.log(max(10, 20)); // 20
console.log(max(200, 30)); // 200

// => 호이스팅 단원. var로 선언한 변수가 함수 단위의 접근이 가능한 이유
