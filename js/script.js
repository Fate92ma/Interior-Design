$(document).ready(function () { // Start Coding Here

    // Smooth Scroll

    $('.side-list li a').click(function () {

        var sectionTo = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(sectionTo).offset().top
        }, 1200);

    });

    // Menu

    $(".bar").click(function () {
        $("aside").toggleClass("mini");
        $("aside h1").css("margin-bottom", "65px");
        $(".side-list a").css("margin", "2px auto");
    });

}); // End Code