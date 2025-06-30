const animationElement = document.querySelectorAll(".animation");
console.log(animationElement);

console.log("画面の高さ", window.innerHeight);


document.addEventListener(
    "scroll",
    function () {
        for (let i = 0; i < animationElement.length; i++) {
            const element = animationElement[i];
            const rect = element.getBoundingClientRect();

            if (rect.top < window.innerHeight * 0.6) {
                element.classList.add("show");
            }
        }
    }
)

