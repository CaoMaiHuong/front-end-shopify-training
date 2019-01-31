$('#related-product').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
});

$('.bottom__item').hover(function(){
    var datasrc = $(this).attr("data-src");
    $(this).parent().siblings().find("img").attr("src",datasrc);
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
})  