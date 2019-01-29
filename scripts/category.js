$('.bottom__item').hover(function(){
    var datasrc = $(this).attr("data-src");
    $(this).parent().siblings().find("img").attr("src",datasrc);
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
}) 

$('.grid__item').on('click', function(e){
    var data = $(this).attr("data");
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    var productLayout = $(".grid").find("[id='" + data + "']");
    productLayout.siblings().removeClass("active");
    productLayout.addClass("active");  
})