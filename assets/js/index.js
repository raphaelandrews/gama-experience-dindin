/*=============== MENU MOBILE ===============*/
const burguer = document.querySelector(".nav__burguer");
const navMenu = document.querySelector(".nav__list");

burguer.addEventListener("click", () => {
    burguer.classList.toggle("active");
    navMenu.classList.toggle("active");
})

/*=============== SCROLL TOP ===============*/
scrollTop = document.getElementById("scroll__top");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        scrollTop.style.display = "inherit";
    } else {
        scrollTop.style.display = "none";
    }
}

