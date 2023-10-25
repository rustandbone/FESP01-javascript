// 객체 생성
var foo = {
  name: "foo",
  major: "computer science",
};

// 객체 프로퍼티 읽기
console.log(foo.name, foo["major"]);
// console.log(foo.sub.toUpperCase()) undefined에 접근하려고 하는 경우 오류 발생(TypeError)
console.log(foo.sub?.toUpperCase());

// 객체 프로퍼티 갱신
foo.major = "electronic engineering";
console.log(foo);

// 객체 프로퍼티 동적 생성
foo.sub = "computer engineering";
console.log(foo);

// 객체 프로퍼티 삭제
delete foo.major;
console.log(foo);

// 객체 모든 프로퍼티 읽기
for (const prop in foo) {
  console.log(prop, foo[prop]);
}
