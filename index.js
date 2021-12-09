
Ecwid.OnAPILoaded.add(function(page) {
    var priceDiv = document.querySelector('.product-details__product-price');
    var price = parseInt(priceDiv.getAttribute("content"))*100;
    var currencyFormat = Ecwid.formatCurrency(price);
    console.log(currencyFormat);
    priceDiv.querySelector('.details-product-price__value').innerHTML = currencyFormat;
});