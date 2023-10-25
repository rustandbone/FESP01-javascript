function sum(a, b) {
  return a + b;
}
console.log(sum(10, 20));
console.log(sum(30));

//IIFE 패턴
(function () {
  function sum([x = 0, y = 0] = []) {
    return x + y;
  }

  console.log(sum([1, 2]));
  console.log(sum());
  console.log(sum([]));
  console.log(sum([1]));
})();

(function () {
  function sum({ x = 0, y = 0 } = {}) {
    return x + y;
  }

  console.log(sum());
  console.log(sum({}));
  console.log(sum({ x: 4 }));
  console.log(sum({ x: 5, y: 6 }));
})();
