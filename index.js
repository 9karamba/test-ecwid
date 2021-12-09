console.log('test')
Ecwid.OnAPILoaded.add(function(page) {
    var priceDiv = document.querySelector('.product-details__product-price');
    var price = parseInt(priceDiv.getAttribute("content"))*100;
    var currencyFormat = Ecwid.formatCurrency(price);
    alert(currencyFormat);
    priceDiv.querySelector('.details-product-price__value').innerHTML = currencyFormat;
});