const container = document.querySelector(".container");
for (let i = 0; i <= 50; i++) {
    const blocks = document.createElement("div");
    blocks.classList.add("blocks");
    container.appendChild(blocks);
}

function animateBlocks() {
    anime({
        targets: ".blocks",
        translateX: function () {
            return anime.randam(-800, 700);
        }
    })
}
animateBlocks();