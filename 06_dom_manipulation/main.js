const buttonEl = document.getElementById('menu-toggle')
const mobileMenuEl = document.querySelector('.mobile-menu')
const closeButtonEl = document.querySelector('.close')

buttonEl.addEventListener('click', function () {
  console.log('Clicked');

  mobileMenuEl.style.display = 'block'

})


closeButtonEl.addEventListener('click', function () {
  mobileMenuEl.style.display = 'none'
})