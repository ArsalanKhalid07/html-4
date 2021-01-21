$(function() {
    $(".navbar-set li > a").each(function() {
        var href = $(this).attr('href');
        var heading = $(this).text();
        $('.sidenav').append('<a href="' + href + '">' + heading + '<\/a>');
    });
});



function openNav() {
    document.getElementById("mySidenav").style.left = "0px";
}

function closeNav() {
    document.getElementById("mySidenav").style.left = "-250px";
}




$('.business-slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 0,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});