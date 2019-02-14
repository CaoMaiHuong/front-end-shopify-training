$(document).ready(function() {
    console.log('sdfdf');
    $('#related-product').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.bottom__item').hover(function(){
        var datasrc = $(this).attr("data-src");
        $(this).parent().siblings().find("img").attr("src",datasrc);
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
    })  


    $('.main-product__detail__color ul .color').on('click', function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })

    $('.main-product__detail__add__quantity span.plus').on('click', function(){
        var value = $('.main-product__detail__add__quantity input').attr('value');
        value++;
        $('.main-product__detail__add__quantity input').attr("value",value);
    })
    $('.main-product__detail__add__quantity span.minus').on('click', function(){
        var value = $('.main-product__detail__add__quantity input').attr('value');
        if(value<=1){
            value=1;
        }
        else{
            value--;
        }
        $('.main-product__detail__add__quantity input').attr("value",value);
    })

    var img = $('.main-product__list__slider__image'),
        height = img.height();

    $('.arrow').on('click', function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        var up = $(this).is('.up');
        if (up) {
            img.animate({'scrollTop': '-=' + 135});
        } else {
            img.animate({'scrollTop': '+=' + 135});        
        }
    });
    $('.main-product__slider__item').on('click', function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        var src = $(this).find('img').attr('src');
        $('.main-product__big-image img').attr('src',src);
    });
});
