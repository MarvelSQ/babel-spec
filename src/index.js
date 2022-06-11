const entries = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);

const a = Object.fromEntries(entries);

console.log(a);
