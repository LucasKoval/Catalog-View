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

    for (let i = 0; i < card.length; i++) {
        card[i].addEventListener('mouseenter', () => {
            redeem[i].classList.remove("visually-hidden");
            card[i].classList.add("move-up");
            shopIcon[i].src = '/images/icons/buy-white.svg'
        });

        card[i].addEventListener('mouseleave', () => {
            redeem[i].classList.add("visually-hidden");
            card[i].classList.remove("move-up");
            shopIcon[i].src = '/images/icons/buy-blue.svg'
        });
    }
});