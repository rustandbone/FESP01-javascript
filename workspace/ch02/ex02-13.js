function fn(n1, n2) {
  // console.log(n1, n2);
  var sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum);
}

fn();
fn(10);
fn(20, 30);
fn(20, 30, 40);
fn(20, 30, 40, 50);
