// Dark Mode
function darkMode() {
    const body = document.body;
    const theme = document.querySelector(".theme");
    body.classList.toggle("dark-mode");
    theme.classList.toggle("dark-mode");
}
function darkTheme() {
    const theme = document.querySelector(".theme");
    theme.classList.toggle("dark-mode");
}

// Redeem
window.addEventListener("load",function(){
    const card = document.querySelectorAll("div.card");
    const redeem = document.querySelectorAll(".redeem");
    const shopIcon = document.querySelectorAll(".shop-icon");
    const previous = document.querySelectorAll(".previous");
    const next = document.querySelectorAll(".next");
    const firstProducts = document.querySelector("#firstProducts");
    const lastProducts = document.querySelector("#lastProducts");
    const allowedItems = document.querySelectorAll(".card .allowedItems")
    const prevButtonHigh = document.querySelector(".prev-button-high");
    const prevButtonLow = document.querySelector(".prev-button-low");
    const productsNumberHigh = document.querySelector(".products-number-high");
    const productsNumberLow = document.querySelector(".products-number-low");
    
    // Pagination
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
    for (let i = 0; i < allowedItems.length; i++) {
        allowedItems[i].addEventListener('mouseenter', () => {
            shopIcon[i].src = '/images/icons/buy-white.svg'
        });

        allowedItems[i].addEventListener('mouseleave', () => {
            shopIcon[i].src = '/images/icons/buy-blue.svg'
        });
    }


    let button = document.querySelector("button.salir");
    let alert = document.querySelector(".modal-content");
    let modal = document.querySelector(".modal");
    let buttonFlex = document.querySelector("a.displayFlex");

    let modalBlur =(element)=>{
        return element.style.backdropFilter="blur(10px)"
    }

    let modalBlock =(element)=>{
        return element.style.display="block"
    }

    let displayFlex =(element)=>{
        return element.style.display="flex"
    }

    let displayNone = (element )=>{
        return  element.style.display="none"
    }

    let modalNone = (element )=>{
        element.style.display="none"
        return  element.style.backdropFilter="none"
    }

    buttonFlex.addEventListener("click",function(){
        modalBlur(modal)
        modalBlock(alert)
        displayFlex(modal)
    });

    button.addEventListener("click",function(){
        displayNone(alert)
        modalNone(modal)
    });

});