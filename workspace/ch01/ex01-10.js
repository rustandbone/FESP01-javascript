//stack - Last in First out
var stack = [];
//100, 200, 300 저장
stack.push(100);
console.log(stack);
stack.push(200);
console.log(stack);
stack.push(300);
// stack.push(100, 200, 300);
console.log(stack);
//300, 200, 100 출력
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
// stack.pop();
// console.log(stack);
// stack.pop();
// console.log(stack);
// stack.pop();
// console.log(stack);

//queue - First in First out
var queue = [];
//100, 200, 300 저장
queue.push(100);
console.log(queue);
queue.push(200);
console.log(queue);
queue.push(300);
console.log(queue);
//100, 200, 300 출력
console.log(queue.shift());
console.log(queue.shift());
console.log(queue.shift());
// queue.shift();
// console.log(queue);
// queue.shift();
// console.log(queue);
// queue.shift();
// console.log(queue);

console.log(stack, queue);
