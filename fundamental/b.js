function* fun2() {
  yield "Line 1";
  yield "Line 2";
  yield "Line 3";
}

const gen = fun2();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
