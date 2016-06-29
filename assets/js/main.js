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
$(window).ready(function(){
window.onload = function() {

    baron({
        root: '.main__clipper',
        scroller: '.main__scroller',
        bar: '.main__bar',
        scrollingCls: '_scrolling',
        draggingCls: '_dragging',
        direction: 'h'
    })

    baron({
        root: '.baron',
        scroller: '.baron__scroller',
        bar: '.baron__bar',
        scrollingCls: '_scrolling',
        draggingCls: '_dragging'
    }).fix({
        elements: '.header__title',
        outside: 'header__title_state_fixed',
        before: 'header__title_position_top',
        after: 'header__title_position_bottom',
        clickable: true
    }).controls({

        track: '.baron__track',
        forward: '.baron__down',
        backward: '.baron__up'
    })
}
});

$(window).ready(function(){

    $(".my-account-bth div button").click(function() {
        $(".left-menu").toggle(500);
        $(".my-account-bth div button").toggleClass("btn-active-menu");
        $(".my-account-page").toggleClass("left-active-menu");

        if ($(".my-account-bth div button").text("Menu")) {

            $(".btn-active-menu").text("close");
        }
        else {

            $(".my-account-bth div button").text("Menu");
        }


    });
});

