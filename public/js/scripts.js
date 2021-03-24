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
