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
const close1 = document.querySelector('#close1')
const close2 = document.querySelector('#close2')
const close3 = document.querySelector('#close3')
const dialog1 = document.querySelector('#dialog1')
const dialog2 = document.querySelector('#dialog2')
const dialog3 = document.querySelector('#dialog3')

showModal.addEventListener('click', e => {
  dialog1.showModal()
})

showModal2.addEventListener('click', e => {
  dialog2.showModal()
})

showModal3.addEventListener('click', e => {
  dialog3.showModal()
})

close1.addEventListener('click', e => {
  dialog1.close()
})

close2.addEventListener('click', e => {
  dialog2.close()
})

close3.addEventListener('click', e => {
  dialog3.close()
})