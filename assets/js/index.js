const burguer = document.querySelector(".nav__burguer");
const navMenu = document.querySelector(".nav__list");

burguer.addEventListener("click", () => {
    burguer.classList.toggle("active");
    navMenu.classList.toggle("active");
})
