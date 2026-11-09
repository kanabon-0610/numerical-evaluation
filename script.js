// Number.isInteger()
// 1
Number.isInteger(0); // 予想 : true
Number.isInteger(-3); // 予想 : true
Number.isInteger(2.0); // 予想 : true
Number.isInteger("10"); // 予想 : false
Number.isInteger(0.1 + 0.2); // 予想 : false

console.log(Number.isInteger(0)); // true
console.log(Number.isInteger(-3)); // true
console.log(Number.isInteger(2.0)); // true
console.log(Number.isInteger("10")); // false
console.log(Number.isInteger(0.1 + 0.2)); // false

// 2
function checkInt(value) {
  return Number.isInteger(value) ? "整数です" : "整数ではありません";
}
console.log(checkInt(7));
console.log(checkInt(7.3));

// 3
const input = "42";
console.log(Number.isInteger(Number(input)));

// Number.isNaN()
// 1
Number.isNaN(NaN); // 予想 : true
Number.isNaN(0 / 0); // 予想 : true
Number.isNaN("NaN"); // 予想 : false
Number.isNaN(Number("12px")); // 予想 : true
Number.isNaN(null); // 予想 : false

console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(0 / 0)); // true
console.log(Number.isNaN("NaN")); // false
console.log(Number.isNaN(Number("12px"))); // true
console.log(Number.isNaN(null)); // false

// 2
let checkNum = function (str) {
  return Number.isNaN(Number(str)) ? "数値ではありません" : "数値です";
};
console.log(checkNum("123"));
console.log(checkNum("abc"));

// 3
const inputs = ["10", "3.5", "abc", "", "-8"];
inputs.forEach((str) => {
  const num = Number(str);
  if (Number.isNaN(num)) {
    console.log(`${str} : 数値ではない(NaN)`);
  } else if (Number.isInteger(num)) {
    console.log(`${str} : 整数`);
  } else {
    console.log(`${str} : 整数ではない数値(小数)`);
  }
});

// Number.isFinite()
// 1
Number.isFinite(0); // 予想 : true
Number.isFinite(-1.5); // 予想 : true
Number.isFinite(1 / 0); // 予想 : false
Number.isFinite(Number("Infinity")); // 予想 : false
Number.isFinite("5"); // 予想 : false

console.log(Number.isFinite(0)); // true
console.log(Number.isFinite(-1.5)); // true
console.log(Number.isFinite(1 / 0)); // false
console.log(Number.isFinite(Number("Infinity"))); // false
console.log(Number.isFinite("5")); // false

// 2
console.log(isFinite("10")); // 引数をnumber型に変換してから判定
console.log(Number.isFinite("10")); // 引数をnumber型に変換しない。

// 3
checkNum = function (str) {
  if (str.trim() === "") {
    return `${str} は 有限の数値ではありません。`;
  }
  return Number.isFinite(Number(str)) ? `${str} は 有限の数値です` : `${str} は 有限の数値ではありません`;
};

console.log(checkNum("123"));
console.log(checkNum("abc"));
console.log(checkNum("Infinity"));
console.log(checkNum(""));

// toFixed();
// 1
(2.5).toFixed(0); // 予想 : 3
(3.14159).toFixed(3); // 予想 : 3.142
(10).toFixed(1); // 予想 : 10.0
(0.1 + 0.2).toFixed(1); // 予想 : 0.3
typeof (7.5).toFixed(1); // 予想 : string

console.log((2.5).toFixed(0)); // 3
console.log((3.14159).toFixed(3)); // 3.142
console.log((10).toFixed(1)); // 10.0
console.log((0.1 + 0.2).toFixed(1)); // 0.3
console.log(typeof (7.5).toFixed(1)); // string

// 2
function formatPrice(num) {
  return `${num.toFixed(2)}円`;
}
console.log(formatPrice(1980));
console.log(formatPrice(298.5));

// 3
const piText = "3.14159";
if (Number.isFinite(Number(piText))) {
  const result = Number(Number(piText).toFixed(2));
  console.log(Number(piText).toFixed(2));
  console.log(Number.isFinite(result));
}
