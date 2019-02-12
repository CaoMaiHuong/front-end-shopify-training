$('.bottom__item').hover(function(){
    var datasrc = $(this).attr("data-src");
    $(this).parent().siblings().find("img").attr("src",datasrc);
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
}) 

var buttonGrid = $('.view-mode .view-grid'),
buttonList = $('.view-mode .view-list'),
productList = $('.product-list');
buttonGrid.on('click', function(e) {
    $(this).addClass('active');
    buttonList.removeClass('active');
    productList.removeClass('product-view-list');
    productList.addClass('product-view-grid');
});

buttonList.on('click', function(e) {
    e.preventDefault();
    $(this).addClass('active');
    buttonGrid.removeClass('active');
    productList.removeClass('product-view-grid');
    productList.addClass('product-view-list');
});

$(function() {
    $("#price-range").slider({range: true, min: 0.00, max: 500.00, values: [0.00, 500.00], slide: function(event, ui) {$("#priceRange").val("$" + ui.values[0]+ ".00" + " - $" + ui.values[1] + ".00");}
    });
    $("#priceRange").val("$" + $("#price-range").slider("values", 0) + ".00" + " - $" + $("#price-range").slider("values", 1) + ".00");
  });