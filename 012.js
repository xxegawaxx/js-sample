const [a = 5, b = 7] = [1];
console.log(a, b);

const { c = 5, d = 7 } = { c: 1 };
console.log(c, d);
