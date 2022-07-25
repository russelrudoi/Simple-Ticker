window.addEventListener('DOMContentLoaded', () => {

    const coins = document.querySelectorAll('.coin__item'),
        fieldValuta = document.querySelector('.promo__field-valuta'),
        fieldCount = document.querySelector('.promo__field-count');

    let nameCoin = 'btcusdt';
    let nameValuta = 'btcusdt';

    coins.forEach(item => {
        item.addEventListener('click', (e) => {

            nameCoin = e.currentTarget.dataset.coin;
            showCostCoin(nameCoin)
            changeValuta(nameCoin);
        })
    })

    function changeValuta(str) {
        let index = (str.length - 1) / 2;
        nameValuta = str.substr(0, index) + '/' + str.substr(index);
        fieldValuta.textContent = nameValuta.toUpperCase();
    }
    changeValuta(nameValuta)


    pricesWs = new WebSocket(`wss://stream.binance.com:9443/ws/btcusdt@trade/ethusdt@trade/solusdt@trade/xrpusdt@trade`);

    function showCostCoin(nameCoin) {
        let nameCoinUpper = nameCoin.toUpperCase()

        pricesWs.onmessage = function (event) {
            let coinData = JSON.parse(event.data);
            let coinCost;
            console.log(coinData)
            if (coinData.s == nameCoinUpper) {
                coinCost = +coinData.p;
                fieldCount.textContent = coinCost.toFixed(2);
            }
        }
    }
    showCostCoin(nameCoin);





    // Symbol: ETH/USDT - Kline 30 minutes.
    // socket = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade');


    // socket.onmessage = function (event) {

    //     // Easier and shorter.
    //     let data = JSON.parse(event.data);
    //     console.log(data)
    // }


})