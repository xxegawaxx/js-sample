const setUp = () => {
  let count = 0;
  return () => {
    return count++;
  };
};

const next = setUp();
console.log(next());
console.log(next());
console.log(next());
