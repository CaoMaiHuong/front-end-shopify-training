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

$(function() {
    $("#price-range").slider({range: true, min: 0.00, max: 500.00, values: [0.00, 500.00], slide: function(event, ui) {$("#priceRange").val("$" + ui.values[0]+ ".00" + " - $" + ui.values[1] + ".00");}
    });
    $("#priceRange").val("$" + $("#price-range").slider("values", 0) + ".00" + " - $" + $("#price-range").slider("values", 1) + ".00");
  });