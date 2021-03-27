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
    const card = document.querySelector(".card");
    const redeem = document.querySelector(".redeem");
    const shopIcon = document.querySelector("#shop-icon");
    
    card.addEventListener('mouseenter', () => {
        console.log('mouseenter funciona');
        redeem.classList.remove("visually-hidden");
        shopIcon.src = '/images/icons/buy-white.svg'
    });

    card.addEventListener('mouseleave', () => {
        console.log('mouseleave funciona');
        redeem.classList.add("visually-hidden");
        shopIcon.src = '/images/icons/buy-blue.svg'
    });

})