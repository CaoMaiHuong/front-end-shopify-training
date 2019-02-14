$('.dropdown .dropbtn').on('click', function(e){
    $(this).parent().find('.dropdown-content').toggle(250);
    $(this).parents().siblings().find('.dropdown-content').slideUp(100);
});

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $('#goTop').fadeIn(200);
    } else {
        $('#goTop').fadeOut(200);
    }
}
function goToTop() {
    $('body,html').animate({
        scrollTop : 0              
    }, 500);
}