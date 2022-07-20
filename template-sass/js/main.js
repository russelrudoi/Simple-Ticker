window.addEventListener('DOMContentLoaded', () => {

    const itemCoins = document.querySelectorAll('.coin__item');
    const widthWindow = document.querySelector('.coin__inner').clientWidth;
    const heightWindow = document.querySelector('.coin__inner').clientHeight;


    //Скрипт для рандомного расположения монеток

    itemCoins.forEach(item => {
        setPosition(item)
    })

    function posit() {
        let posY = Math.floor(Math.random() * heightWindow);
        let posX = Math.floor(Math.random() * widthWindow);
        return [posX, posY];
    }

    function setPosition(itemCoin) {
        let posX = posit()[0];
        let posY = posit()[1];
        itemCoin.style.left = posX + 'px';
        itemCoin.style.top = posY + 'px';
    }

})