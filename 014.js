function fun() {
  return Array.from(arguments);
}

const hoge = fun(1, 2, 3);
console.log(hoge);

function func(...args) {
  return args;
}
const hoge2 = func(1, 2, 3);
console.log(hoge2);
