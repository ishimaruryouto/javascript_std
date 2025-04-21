// function createLins() {
//     let line = document.createElement("div");
//     line.setAttribute("class", "line");
//     document.body.appendChild(line);

//     line.style.left = Math.random() * innerWidth + "px";
//     line.style.animationDuration = 3 + Math.random() * 12 + "s";
//     line.style.width = Math.random() * 8 + "px";
//     line.style.height = Math.random() * 8 + "px";


//     setTimeout(function () {
//         line.style.opacity = 0;
//         setTimeout(() => {
//             document.body.removeChild(line);
//         }, 1000);
//     }, 5000);
// }

// setInterval(() => {
//     createLins();

// }, 100);

function createLins() {
    let circle = document.createElement("div");
    circle.setAttribute("class", "circle");
    document.body.appendChild(circle);

    const size = Math.random() * 10 + 3; // 10px〜40pxのサイズ

    circle.style.left = Math.random() * innerWidth + "px";
    circle.style.width = size + "px";
    circle.style.height = size + "px";

    circle.style.animationDuration = 3 + Math.random() * 12 + "s";

    // フェードアウト処理
    setTimeout(function () {
        circle.style.opacity = 0;
        setTimeout(() => {
            document.body.removeChild(circle);
        }, 1000);
    }, 7000);
}

setInterval(() => {
    createLins();
}, 100);
