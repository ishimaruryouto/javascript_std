//変数
//変数はデータを保存して、後から使うために必要なもの
//変数には大きく分けて二つある
//let　変数名＝値；後から上書きが可能
//const　変数名＝値；　後から上書き不可

const numA=10;
console.log("numA"+numA);
// numA=20;
// console.log(numA);

let numB=10;
console.log("numB"+numB);
numB=20;
console.log("numB",numB);

let numC=10;
numC=20;
console.log("numC",numC);

let numD=3;
let ans;
ans=numC%numD;
console.log(ans);


