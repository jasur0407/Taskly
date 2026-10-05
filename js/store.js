let coinShop = JSON.parse(localStorage.getItem("coinShop")) || [
    {name: "30 min Gaming", price: 20, amount: 0},
    {name: "Watch 1 episode", price: 30, amount: 0},
    {name: "20 min Social Media", price: 20, amount: 0}
];

let orbShop = JSON.parse(localStorage.getItem("orbShop")) || [
    {name: "Dark theme", price: 60, owned: false},
    {name: "Basic avatar pack", price: 20, owned: false},
    {name: "Sound pack", price: 60, owned: false}
]

function renderPoints() {
    let totalPoints = Number(localStorage.getItem("totalPoints")) || 0;
    document.querySelector(".header_right_coins-count").textContent = totalPoints;
}

function renderCoinShop() {
    const coinShopContainer = document.querySelector(".coin-store-container");
    coinShopContainer.innerHTML = "";

    coinShop.forEach((item, index) => {
        coinShopContainer.insertAdjacentHTML("beforeend", `
            <div class="coin-store-container_item">
                <div class="coin-store-container_item-title">${item.name}</div>

                <div class="coin-store-container_item-buy">
                    <div class="coin-store-container_item-price">
                        <div class="coin-store-container_item-price-value">${item.price}</div>
                        <img src="res/point-icon.png" style="height: 25px;" alt="">
                    </div>
                    <div class="coin-store-container_item-buy-btn red-btn" data-index="${index}">Buy</div>
                </div>
                <div class="coin-store-container_item-owned">Owned amount: ${item.amount}</div>
            </div>`);

    });
}


renderPoints();
renderCoinShop();




localStorage.setItem("coinShop", JSON.stringify(coinShop));
localStorage.setItem("orbShop", JSON.stringify(orbShop));

console.log(localStorage)