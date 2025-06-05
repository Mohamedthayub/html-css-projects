const button = document.querySelector(".humberger-btn");
const navbar = document.querySelector("#nav");
button.addEventListener("click",() => {
    navbar.classList.toggle("display");
})
