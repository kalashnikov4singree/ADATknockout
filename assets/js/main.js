/**
 * Created by V1pBoy on 12.06.2016.
 */
function fullscreenImg(){
    var windowHeight = $(window).height();
    $(".full-screen-img").height(windowHeight);
}
$(window).ready(function(){
    fullscreenImg();
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
});
$(window).resize(function(){
    fullscreenImg();
});

