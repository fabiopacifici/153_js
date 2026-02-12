console.log('it works');

// Select all the dom nodes needed

// - select the form and its fields
const formEl = document.querySelector('form')
const companyFieldEl = document.getElementById('company-field')
const titleFieldEl = document.getElementById('title-field')
const nameFieldEl = document.getElementById('name-field')
const roleFieldEl = document.getElementById('role-field')
const emailFieldEl = document.getElementById('email-field')
const phoneFieldEl = document.getElementById('phone-field')
const companyFieldPicEl = document.getElementById('company-pic-field')

// - select all card's placeholders to replace the contents with the form data
const companyEl = document.getElementById('company')
const titleEl = document.getElementById('title')
const nameEl = document.getElementById('name')
const roleEl = document.getElementById('role')
const phoneEl = document.getElementById('phone')
const emailEl = document.getElementById('email')
const companyPicEl = document.getElementById('company-pic')



// Attach an event listener on the form for the "submit" event
formEl.addEventListener('submit', function(e){
  // - prevent the default behaviour 
  e.preventDefault()


  // - read the inputs values to grab the provided data
  const companyValue = companyFieldEl.value
  console.log(companyValue);
  const titleValue = titleFieldEl.value
  const nameValue = nameFieldEl.value
  const roleValue = roleFieldEl.value
  const emailValue = emailFieldEl.value
  const phoneValue = phoneFieldEl.value
  const companyPicValue = companyFieldPicEl.value
 
  // - replace the placeholder contents with the above values
  titleEl.innerHTML = titleValue
  companyEl.innerHTML = companyValue
  nameEl.innerHTML = nameValue
  roleEl.innerHTML = roleValue
  phoneEl.innerHTML = phoneValue
  emailEl.innerHTML = emailValue
  companyPicEl.src = companyPicValue
  
  

})
