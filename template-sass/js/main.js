window.addEventListener('DOMContentLoaded', () => {

    const coins = document.querySelectorAll('.coin__item'),
        fieldValuta = document.querySelector('.promo__field-valuta'),
        fieldCount = document.querySelector('.promo__field-count');

    let nameCoin = 'bitcoin'
    let pricesWs;

    let objectCoin = {}

    coins.forEach(item => {
        item.addEventListener('click', (e) => {

            nameCoin = e.currentTarget.dataset.coin;
            showCostCoin(nameCoin)
            fieldValuta.textContent = `${e.currentTarget.dataset.valuta}/USD`
        })
    })

    pricesWs = new WebSocket(`wss://ws.coincap.io/prices?assets=ALL`);
    function showCostCoin (nameCoin) {
        pricesWs.onmessage = function (msg) {
            let coinData = JSON.parse(msg.data);
            let coinCost;
            console.log(coinData);
            if (coinData[nameCoin] !== undefined) {
                coinCost = coinData[nameCoin];
                fieldCount.textContent = coinCost;
            }

            
            
        }
    }
    showCostCoin(nameCoin);

})