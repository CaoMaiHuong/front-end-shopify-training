$(document).ready(function() {
    $('.cart__list__product .cart__product__item .cart__product__quantity span.plus').on('click', function(){
        var ip = $(this).siblings().find('input');
        var value= ip.attr('value');
        value++;
        ip.attr('value',value);
    })
    $('.cart__list__product .cart__product__quantity span.minus').on('click', function(){
        var ip = $(this).siblings().find('input');
        var value= ip.attr('value');
        if(value<=1){
            value=1;
        }
        else{
            value--;
        }
        ip.attr('value',value);
    }) 
});
