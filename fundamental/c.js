function* generateEven(count = 4) {
  let number = 2;
  for (let i = 0; i < count; i++) {
    yield number;
    number += 2;
  }
}

console.log("------- Even Generator --------");
const eventGen = generateEven(12);

let even = eventGen.next();
while (!even.done) {
  console.log(even.value);
  even = eventGen.next();
}
