const display = document.querySelector(".display");
const bt = document.querySelector(".bt");
const catchphras = [
    "「〇〇なんだけど、悲しいかなぁ」ーby 瀧本先生",
    "「これは〇〇じゃん？」ーby 明夫先生",
    "「私はどーなっても良いからええねんけどな」ーby 桃井先生",
    "「はにゃぁ〜、ふわぁ、にゃはははは〜、うひょぉぉ」ーby 坂倉先生",
    "「もー俺っておっちょこちょい♡」ーby 友塚",
    "「まー未来の俺がなんとかしてくれる」ーby みよしん",
    "「りょうとくん奇遇やな」ーby れんくん"
];

const showDisplay = () => {
    const index = Math.floor(Math.random() * catchphras.length);
    display.textContent = catchphras[index];
}

bt.addEventListener(
    "click",
    showDisplay
);