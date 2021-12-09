
EcwidApp.init({
    app_id: "cstmz-69350256-test",
});

Ecwid.OnAPILoaded.add(function(page) {
    // var currencyFormat = Ecwid.formatCurrency(12.99);
    console.log('Ecwid', Ecwid);
    console.log('page', page);
});