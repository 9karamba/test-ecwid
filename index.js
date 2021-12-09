var priceDiv = document.querySelector('.ec-price-item');
var price = priceDiv.getAttribute("content");
var currencyFormat = Ecwid.formatCurrency(price);
console.log(currencyFormat);