/* const age = 29

const now = new Date()
const current_year = now.getFullYear()
console.log(age, now, current_year);

const foto_year_of_birth = current_year - age

console.log(foto_year_of_birth); */


///

/* const cri_age = 30

const now_cri = new Date()
const current_year_cri = now.getFullYear()
console.log(age, now, current_year);

const cri_year_of_birth = current_year_cri - cri_age

console.log(cri_year_of_birth); */


/// ....


// Example 2 (code repetition)


/* const now = new Date()
const hours = now.getHours()
const minutes = now.getMinutes()
const seconds = now.getSeconds()

console.log(`${hours}:${minutes}:${seconds}`);
 */


/// .....


/* const now = new Date()
const hours = now.getHours()
const minutes = now.getMinutes()
const seconds = now.getSeconds()

document.writeln(`${hours}:${minutes}:${seconds}`); */



// 📌 Function Declaration

/* 
- function keyword
- function name: pick a name that explains the action of the function
- (): this can bee used to pass information to the function logic
- { 
// your code here
}

*/


/* function calcYearOfBirth() {
  // your code here 
}

function getUserYearOfBirth() {
  // your code here 
}


function logCurrentTime() {
  // your code here
}


function printCurrentTime() {
  // print the current time on the page
}
 */
/* function getCurrentTime(){
  // returns the current time on the page

} */


// 📌 Functions declarations examples

/* function sumNumbers(x, y) {
  const result = x + y
  console.log(result);

}

sumNumbers(10, 50)
sumNumbers(5, 9)
sumNumbers(200, 40)

 */


// Different functions names based on the action the function does
/* function logMultiplyNumbers(numb_1, numb_2) {
  const result = numb_1 * numb_2
  console.log(result);

}
logMultiplyNumbers(5, 9)


function printMultiplyNumbers(numb_1, numb_2) {
  const result = numb_1 * numb_2

  document.writeln(result)

}

printMultiplyNumbers(55, 88)

 */
// 📌 Return keyword

/* function getCurrentTime() {
  // returns the current time on the page
  const now = new Date()
  const hours = now.getHours()
  const minutes = now.getMinutes()
  const seconds = now.getSeconds()
  const result = `${hours}:${minutes}:${seconds}`
  return result; // "10:20:33"


}
 */
// 👉 functions that retun values, must be stored to be used lated

/* console.log(getCurrentTime()) // 10:20:33
const currentTime = getCurrentTime()
console.log(currentTime);
 */





//  📌 Hoistig (function declarations only)

/* logCurrentTime() */


/* 
function logCurrentTime() {
  // your code here
  const now = new Date()
  const hours = now.getHours()
  const minutes = now.getMinutes()
  const seconds = now.getSeconds()
  const result = `${hours}:${minutes}:${seconds}`
  console.log(result);

}
console.log(result);

logCurrentTime()

console.log(firstName);
var firstName = 'Fabio'
console.log(firstName);
 */



/* function printCurrentTime() {
  // print the current time on the page
  const now = new Date()
  const hours = now.getHours()
  const minutes = now.getMinutes()
  const seconds = now.getSeconds()
  const result = `${hours}:${minutes}:${seconds}`
  document.writeln(result)
}

printCurrentTime() */



/* 
 verificare se un numero è pari o dispari, 
 quindi chiedere un numero all'utente e 
 comunicargli se è pari o dispari
*/





/* 
function get_even_or_odd(numb) {
  let message;
  if (numb % 2 === 0) {
    // the number is even
    message = 'Your number is even'
  } else {
    // the number is off
    message = 'Your number is odd'
  }
  console.log(message);
} 
const user_numb = 11
get_even_or_odd(user_numb)  
*/



/* function isEven(numb) {

  if (numb % 2 === 0) {
    // the number is even
    return true
    
  } else {
    // the number is off
   return false
  }

} */

/* 
function isEven(numb) {

  if (numb % 2 === 0) {
    // the number is even
    return true

  }
  // the number is off
  return false

}


const user_numb = 11

if (isEven(user_numb)) {
  console.log('Your number is even');

} else {
  console.log('Your number is odd');

} */


/* 

numeri random: generare 10 numeri random (con un for o con un while) attraverso una funzione (copiamola da w3schools) e stamparli a schermo

*/

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const result = getRandomNumber(30, 60)
console.log(result);


for(let i = 0; i < 10; i++){
  const result = getRandomNumber(30, 60)
  console.log(result);

}