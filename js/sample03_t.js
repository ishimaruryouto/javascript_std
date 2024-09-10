// JavaScriptからHTMLを参照する
// documentの中のtitle
console.dir(document.title);
document.title = "JavaScriptからHTMLを参照する";

// body要素を参照する場合
console.log(document.body);

// ID属性を使って一意の要素を参照する
const txt = document.getElementById("txt");
console.log(txt);
console.dir(document.body);

const btn = document.getElementById("btn");

//クリックイベントの作成
btn.addEventListener("click", () => {
  //クリックした後この中が実行される
  console.log("click");
  txt.innerHTML = "good bye";
  document.body.style.backgroundColor = "black";
});

console.dir(document.getElementById("num1"));
