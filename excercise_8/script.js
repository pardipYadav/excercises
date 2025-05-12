const a = async (text, n = 2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, 1000 * n);
  });
};

(async () => {
  let text1 = await a("hello");
  console.log(text1);
  let text2 = await a("world");
  console.log(text2);
})();

function sum(a, b, c) {
  return a + b + c;
}

let s = [1, 5, 2];
console.log(sum(...s));

(async () => {
  let t = await a("resolve print after 8 second ", 8);
  console.log(t);
  let c = await a("resovle print after 9 second", 9);
  console.log(c);
})();

function sumInterest(p, r, t) {
  return (p * r * t) / 100;
}

console.log(sumInterest(1000, 5, 8));
