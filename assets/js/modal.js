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