window.addEventListener("load",function(){
    // Pagination
    const previous = document.querySelectorAll(".previous");
    const next = document.querySelectorAll(".next");
    const firstProducts = document.querySelector("#firstProducts");
    const lastProducts = document.querySelector("#lastProducts");
    const prevButtonHigh = document.querySelector(".prev-button-high");
    const prevButtonLow = document.querySelector(".prev-button-low");
    const productsNumberHigh = document.querySelector(".products-number-high");
    const productsNumberLow = document.querySelector(".products-number-low");

    for (let i = 0; i < previous.length; i++) {
        previous[i].addEventListener('click', () => {
            firstProducts.classList.remove("visually-hidden");
            lastProducts.classList.add("visually-hidden");
            prevButtonHigh.classList.add("visually-hidden");
            prevButtonLow.classList.add("visually-hidden");
            productsNumberHigh.innerHTML = '16 of 32 products';
            productsNumberLow.innerHTML = '16 of 32 products';
        });

        next[i].addEventListener('click', () => {
            firstProducts.classList.add("visually-hidden");
            lastProducts.classList.remove("visually-hidden");
            prevButtonHigh.classList.remove("visually-hidden");
            prevButtonLow.classList.remove("visually-hidden");
            productsNumberHigh.innerHTML = '32 of 32 products';
            productsNumberLow.innerHTML = '32 of 32 products';
        });
    }

    // Overlay
    const card = document.querySelectorAll("div.card");
    const redeem = document.querySelectorAll(".redeem");

    for (let i = 0; i < card.length; i++) {
        card[i].addEventListener('mouseenter', () => {
            redeem[i].classList.remove("visually-hidden");
            card[i].classList.add("move-up");
        });

        card[i].addEventListener('mouseleave', () => {
            redeem[i].classList.add("visually-hidden");
            card[i].classList.remove("move-up");
        });       
    }

    // Shop icon
    const allowedItems = document.querySelectorAll(".card .allowedItems");
    const shopIcon = document.querySelectorAll(".shop-icon");

    for (let i = 0; i < allowedItems.length; i++) {
        allowedItems[i].addEventListener('mouseenter', () => {
            shopIcon[i].src = '/images/icons/buy-white.svg'
        });

        allowedItems[i].addEventListener('mouseleave', () => {
            shopIcon[i].src = '/images/icons/buy-blue.svg'
        });
    }

    // Modal
    const modalTrigger = document.querySelector("button.modal-trigger");
    const modal = document.querySelector("div.modal");
    const modalContent = document.querySelector("div.modal-content");
    const exit = document.querySelector("button.exit");   
    const displayFlex = (element) => { element.style.display = "flex" }
    const displayBlock = (element) => { element.style.display = "block" }
    const displayNone = (element ) => { element.style.display = "none" }
    const modalBlur = (element) => { element.style.backdropFilter = "blur(10px)" }

    modalTrigger.addEventListener("click",function(){
        displayFlex(modal)
        displayBlock(modalContent)
        modalBlur(modal)
    });

    exit.addEventListener("click",function(){
        displayNone(modal)
        displayNone(modalContent)
    });    
});

// Dark Mode
function darkMode() {
    const body = document.body;
    const theme = document.querySelector(".theme");
    body.classList.toggle("dark-mode");
    theme.classList.toggle("dark-mode");
    console.log('DarkMode click');
}

// Show History
function showHistory() {
    const history = document.querySelector(".history");
    history.classList.toggle("visually-hidden");
    console.log('history click');
}

// Alert
function showAlert() {
    const alert = document.querySelector('.alert')
    alert.classList.remove("visually-hidden");
}
function closeAlert() {
    const alert = document.querySelector('.alert')
    alert.classList.add("visually-hidden");
}

/*
// Filter
function filter() {
    const lowestCostFilter = document.querySelector("div.lowest-cost-filter");
    const highestCostFilter = document.querySelector("div.highest-cost-filter");
    const mostRecent = document.querySelector("#most-recent");
    const lowestPrice = document.querySelector("#lowest-price");
    const highestPrice = document.querySelector("#highest-price");

    lowestCostFilter.innerHTML = '<% const lowestCost = products.sort((x, y) => { return x.cost - y.cost }); %>';
    highestCostFilter.innerHTML = '<% const highestCost = lowestCost.reverse(); %>';
}
*/

