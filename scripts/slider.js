$(document).ready(function () {
    $("#single_item").slick({
    dots: true,
    arrows: false,
    autoplay: true,
    });

    $('#best-selling_item').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1
    });

    $('#featured_item').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1
    });

    $('.bottom__item').hover(function(){
        var datasrc = $(this).attr("data-src");
        $(this).parent().siblings().find("img").attr("src",datasrc);
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
    })   

    $('#company_items').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1
    });
   
    $('#multiple_items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });
                     
});