$(document).ready(function() {

    // Owl slider mobile menu
    $('#work-slider,#team-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        //center: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 1.5,
            },
            600: {
                items: 2,
            },
            768: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    });






    //mobile Media
    if ($(window).width() <= 991) {}

});