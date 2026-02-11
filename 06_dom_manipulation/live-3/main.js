// DOM Manipulation
// 📌 Event listeners


// select the dom node where attach the listener
const clickMeEl = document.getElementById('click-me')
console.log(clickMeEl);


// with an anon function
// disposable logic (not reusable)
clickMeEl.addEventListener('click', function(){
  // your code here
  console.log('You clicked the item');
  
})

const buttonEl = document.querySelector('button')
console.log(buttonEl);


// reusable function logic
function hanldeButtonClick(){
  console.log('You clicked the button');
}
// with a function handler
buttonEl.addEventListener('click', hanldeButtonClick)


clickMeEl.addEventListener('click', hanldeButtonClick)


// When it has params
function handleButtonClickWithParams(x, y){
  console.log('Clicked the button with params');
  
}

buttonEl.addEventListener('click', function(){
  handleButtonClickWithParams(10, 5)
})

''.trim()