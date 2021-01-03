const a = { a: 'a' };
const b = { b: 'b' };

const c = Object.assign({}, a, b);
console.log(c);

const hoge = { ...a, ...b };
console.log(hoge);
