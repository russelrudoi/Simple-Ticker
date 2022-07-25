window.addEventListener('DOMContentLoaded', () => {

    const coins = document.querySelectorAll('.coin__item'),
        fieldValuta = document.querySelector('.promo__field-valuta'),
        fieldCount = document.querySelector('.promo__field-count'),
        spinner = document.querySelector('.box-spinner');

    let nameCoin = 'btcusdt';
    let nameValuta = 'btcusdt';
    let pricesWs;

    coins.forEach(item => {
        item.addEventListener('click', (e) => {

            nameCoin = e.currentTarget.dataset.coin;
            pricesWs.close()
            showCostCoin(nameCoin);
            changeValuta(nameCoin);
            changeActiveCoin(e.currentTarget)
            
        })
    })

    function changeActiveCoin (e) {
        coins.forEach((item) => {
            item.classList.remove('coin__item_active');
            e.classList.add('coin__item_active');
        })
    }

    function changeValuta(str) {
        let index = (str.length - 1) / 2;
        nameValuta = str.substr(0, index) + '/' + str.substr(index);
        fieldValuta.textContent = nameValuta.toUpperCase();
    }
    changeValuta(nameValuta);

    // btcusdt@trade/ethusdt@trade/solusdt@trade/xrpusdt@trade
    
    

    function showCostCoin(nameCoin) {
        pricesWs = new WebSocket(`wss://stream.binance.com:9443/ws/${nameCoin}@trade`);
        let nameCoinUpper = nameCoin.toUpperCase()
        let coinCost;
        if (coinCost == undefined) {
            fieldCount.style.display = 'none';
            spinner.style.display = 'block';
        }

        pricesWs.onmessage = function (event) {
            let coinData = JSON.parse(event.data);
            console.log(coinData)
            if (coinCost != undefined) {
                fieldCount.style.display = 'block';
                spinner.style.display = 'none';
            }
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