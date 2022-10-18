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

/*=============== COURSES MODAL ===============*/
/*const modalCourses = document.querySelectorAll('.courses__modal'),
    modalBtns = document.querySelectorAll('.courses__btn'),
    modalClose = document.querySelectorAll('.modal-close')

let modal = function (modalClick) {
    modalCourses[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) => {
    mb.addEventListener('click', () => {
        modal(i)
    })
})

modalClose.forEach((mc) => {
    mc.addEventListener('click', () => {
        modalCourses.forEach((mv) => {
            mv.classList.remove('active-modal')
        })
    })
})*/

const showModal = document.querySelector('#btn1')
const showModal2 = document.querySelector('#btn2')
const showModal3 = document.querySelector('#btn3')
const close = document.querySelector('#close')
const dialog = document.querySelector('dialog')

showModal.addEventListener('click', e => {
  dialog.showModal()
})

showModal2.addEventListener('click', e => {
  dialog.showModal()
})

showModal3.addEventListener('click', e => {
  dialog.showModal()
})

close.addEventListener('click', e => {
  dialog.close()
})