let arry = [
  { id: 1, name: 'morita' },
  { id: 2, name: 'kenji' },
  { id: 4, name: 'uro' },
  { id: 3, name: 'ken' },
];

const hoge = arry.slice().sort((a, b) => {
  return a.id - b.id;
});

console.log(hoge);
console.log(arry);
