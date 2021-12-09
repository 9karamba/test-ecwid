EcwidApp.init({
    app_id: "cstmz-69350256-test",
    autoloadedflag: true,
    autoheight: true
});

// Get store info
var storeData = EcwidApp.getPayload();
var storeId = storeData.store_id;
var accessToken = storeData.access_token;
var lang = storeData.lang;

window.localStorage.setItem("show_ec_logs", "true");

EcwidApp.OnAPILoaded.add(function(page) {
    var priceDiv = document.querySelector('.product-details__product-price');
    var price = parseInt(priceDiv.getAttribute("content"))*100;
    var currencyFormat = EcwidApp.formatCurrency(price);
    console.log(currencyFormat);
    priceDiv.querySelector('.details-product-price__value').innerHTML = currencyFormat;
});