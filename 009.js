const array = ['a', 'b', 'c'];
const hoge = array.join('');
console.log(hoge);
console.log(array);

const array2 = ['a', 'b', 'c'];
let str = '';
const count = array2.length;
for (let i = 0; i < count; i++) {
  str += array2[i];
}
console.log(str);
