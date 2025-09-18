const button = document.querySelector(".humberger-btn");
const navbar = document.querySelector("#navbar");
button.addEventListener("click",() => {
    navbar.classList.toggle("show");
})
