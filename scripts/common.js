$(document).ready(function() {
    $('.nav__setting .dropdown .dropbtn').on('click', function(e){
        $(this).parent().find('.dropdown-content').toggle(250);
        $(this).parents().siblings().find('.dropdown-content.setting').slideUp(100);
    });

    // if (window.matchMedia("(max-width: 1024px)").matches) {
    //     $('.nav__menu .dropdown .dropbtn').on('click', function(e){
    //         $(this).parent().find('.dropdown-content').toggle(250);
    //         $(this).parents().siblings().find('.dropdown-content').slideUp(100);
    //     });
    // }

    window.onscroll = function() {scrollFunction()};
    function scrollFunction(){
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            $('#goTop').fadeIn(200);
        } else {
            $('#goTop').fadeOut(200);
        }
    }

    document.getElementById("goTop").onclick = function() {goToTop()};
    function goToTop(){
        $('body,html').animate({
            scrollTop : 0              
        }, 500);
    }
});