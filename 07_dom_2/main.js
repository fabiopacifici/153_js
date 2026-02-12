//document.writeln('hello')


// Value is present in html so we can access its content
/* const nameField = document.getElementById('name')
console.log(nameField.value); // Fabio
 */




// When value is not present
/* const jobField = document.getElementById('job')
const buttonEl = document.querySelector('button')
buttonEl.addEventListener('click', function () {
  console.log(jobField.value);

}) */


// When the form tag is used
// - grab the form element
// - add a submit event listener
// - prevent the default behaviour 
// - read the input values

// grab the form 
const formEl = document.querySelector('form')

// grab all inputs/elements inside the form
const jobField = document.getElementById('job')
const nameField = document.getElementById('name')

// Add the eventlistener on the selected form
formEl.addEventListener('submit', function (e) {
  // prevent the page reload using preventDefault *previene il comportamento nativo che fa ricaricare la pagina
  e.preventDefault()
  // read the values of each input/element of the form
  console.log('Form submitted', e);
  console.log(jobField.value);


  // USe the value as needed!
  

})