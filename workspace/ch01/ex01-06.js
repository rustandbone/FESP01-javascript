var married = true;

var foo = {
  "user-name": "lee",
  age: 30,
  job: "teacher",
  married,
};

console.log(typeof foo, foo, foo["user-name"], foo.age, foo.married);

var strFoo = JSON.stringify(foo); //직렬화(객체 -> 문자열)
console.log(typeof strFoo, strFoo, strFoo.age);

var objFoo = JSON.parse(strFoo); //역직렬화(문자열 -> 객체)
console.log(typeof objFoo, objFoo, objFoo.age);
