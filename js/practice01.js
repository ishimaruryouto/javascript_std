// 電卓作成
const num1value=document.getElementById("num1");
const num2value=document.getElementById("num2");
const ansvalue=document.getElementById("ans");

const btn = document.getElementById("btn");


btn.addEventListener("click", () => {
    console.log(num1value.value);
    console.log(num2value.value);
    ansvalue.value=Number(num1value.value)+Number(num2value.value);
});