// 지정한 배열의 모든 요소를 출력한다.
function printArr(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
  }
}

var colorArr = ["orange", "yellow", "green"];
colorArr.push("black");
colorArr.push("white");
console.log(colorArr.shift());
console.log(colorArr.pop());
printArr(colorArr);

// 유사배열객체
//  - length 속성 추가
//  - 0부터 시작해서 1씩 증가하는 속성 추가
var arr2 = {
  0: "orange",
  1: "yellow",
  2: "green",
  length: 3,
  push: function (elem) {
    // 맨 뒤에 지정한 elem을 추가
    // length를 1 증가시킴
    // this[this.length] = elem;
    // this.length++;

    // var tmpArr = [];
    // tmpArr.push.call(this, elem);
    //this => arr2
    //push 할 this를 tmpArr이 아닌 arr2로 바꿈

    // prototype 단원. 배열의 모든 메소드는 Array.prototype 속성에 정의되어 있음
    Array.prototype.push.call(this, elem);
  },
  shift: function () {
    // 배열의 첫 번째 요소 삭제 및 반환
    // length를 1 감소
    // var first = this[0];
    // for (var i = 0; i < this.length - 1; i++) {
    //   this[i] = this[i + 1];
    // }
    // this.length--;
    // delete this[this.length];
    // return first;

    return Array.prototype.shift.call(this);
  },
  pop: function () {
    // 배열의 마지막 요소를 삭제 후 반환
    // length를 1 감소

    // var last = this[this.length - 1];
    // this.length--;
    // delete this[this.length];
    // return last;

    return Array.prototype.pop.call(this);
  },
  // push: function (elem) {
  //   // 맨 뒤에 지정한 elem을 추가
  //   // length를 1 증가시킴
  //   arr2[arr2.length] = elem;
  //   arr2.length++;
  // },
  // shift: function () {
  //   // 배열의 첫 번째 요소 삭제 및 반환
  //   // length를 1 감소
  //   var first = arr2[0];
  //   for (var i = 0; i < arr2.length - 1; i++) {
  //     arr2[i] = arr2[i + 1];
  //   }
  //   arr2.length--;
  //   delete arr2[arr2.length];
  //   return first;
  // },
  // pop: function () {
  //   // 배열의 마지막 요소를 삭제 후 반환
  //   // length를 1 감소
  //   var last = arr2[arr2.length - 1];
  //   arr2.length--;
  //   delete arr2[arr2.length];
  //   return last;
  // },
};
arr2.push("black");
arr2.push("white");
console.log(arr2.shift());
console.log(arr2.pop());
console.log(arr2);
printArr(arr2);
