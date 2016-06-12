/**
 * Created by V1pBoy on 12.06.2016.
 */
function fullscreenImg(){
    var windowHeight = $(window).height();
    $(".full-screen-img").height(windowHeight);
}
$(window).ready(function(){
    fullscreenImg();
    headerActive();
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
    headerActive();
});
function headerActive(){
    var windowHeight = $(window).height();
    if (windowHeight > 768){
        $(window).on("scroll", function() {
            if($(window).scrollTop() > 500) {
                $(".header .navbar").addClass("active slideInDown");
            } else {
                //remove the background property so it comes transparent again (defined in your css)
                $(".header .navbar").removeClass("active slideInDown");
            }
        });
        }
        else{
            $(".header .navbar").addClass("active");
        }
}
