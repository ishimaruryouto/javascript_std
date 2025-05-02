$(".btn").on(
    "click",
    function () {
        $(this).toggleClass("is_active");
        $(".hunbgr_menu").toggleClass("is_active");
    }
)