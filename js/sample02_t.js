// 変数
// 変数はデータを保存して、あとから使うために必要なもの
// 変数には大きく２つ作り方がある
// let 変数名 = 値; あとから上書き可能
// const 変数名 = 値; あとから上書き不可（定数）

const numA = 10;
console.log("numA:" + numA);
// numA = 20;
// console.log(numA);

let numB = 10;
console.log("numB" + numB);
numB = 20;
console.log("numB", numB);

let numC = 10;
numC = 20; //新たに代入すると、元のデータは消えてなくなる
console.log("numC", numC);

let numD = 20;
let ans;
// ans = numC + numD;
// ans = numC - numD;
// ans = numC * numD;
// ans = numC / numD;
// ans = numC % numD;

console.log("ans", ans);
