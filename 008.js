const obj = {
  key: 'aa',
  key2: 'bb',
};

for (o in obj) {
  if (obj.hasOwnProperty(o)) {
    console.log(o, obj[o]);
  }
}
