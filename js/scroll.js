const container = document.querySelector(".container");

container.addEventListener(
    "wheel",
    function (e) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
    }, { passive: false }
);