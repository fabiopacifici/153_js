/* 
console.log('It works');

console.log('it works again');


for (let i = 0; i < 10; i++) {
  console.log(i);
  
  
}

console.log('it works again '); */


// this is async
// option 1 *anon function
/* setTimeout(function(){
  console.log('I am async');
  
}, 2000)

console.log('I am syncronous');


setTimeout(printTime, 5000) */

// ❌ logTime referce error
//setTimeout(logTime, 5000)

// Not hoisted *(const not hoisted)
const logTime = function(){
  const now = new Date()
  const hour = now.getHours()
  const minutes = now.getMinutes()
  const seconds = now.getSeconds()

  console.log(`${hour}:${minutes}:${seconds}`)
}


// function declaration (is hoisted)
function printTime(displayEl){
  const now = new Date()
  const hour = now.getHours()
  const minutes = now.getMinutes()
  const seconds = now.getSeconds()

  displayEl.innerText = `${hour}:${minutes}:${seconds}`
  
}

// 📌 set interval

/* const intervalId = setInterval(logTime, 2000)
console.log(intervalId);
 */



// live 1
// select the dom nodes
const buttonEl = document.getElementById('stop')
const displayEl = document.getElementById('display')
const playEl = document.getElementById('play')
let intervalId;
//const intervalId = setInterval(printTime, 2000)
intervalId = setInterval(function(){
  printTime(displayEl)
}, 1000)
console.log(intervalId);


buttonEl.addEventListener('click', function(){
  console.log('clicked', intervalId);
  clearInterval(intervalId)
  
})

playEl.addEventListener('click', function(){
  console.log('clicked play');
  intervalId = setInterval(function () {
    printTime(displayEl)
  }, 1000)
  
})