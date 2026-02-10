console.log('Arrow functions + scope');


/* 📌 Function declaration */

// Function declaration without parameters
/* function sum(){

}
 */

// Function declaration with parameters
/* function sum(x, y) {
  // your code here
} */

// Invoke your function
// without params
//sum()

// with params
/* sum(5, 8) // makes the sum */





// 📌 Scope

// 👉 Global Scope
const globalVariable = 10



// 👉 Block scope
// - if/else
// - for

// block scope in conditionals statemetns
/* if(10 < 100) {
  // 👇 Block scope
  const blockScopeVariable = 10
  console.log(globalVariable); // ✅ global variables are available in the block scope
  
} */

// console.log(blockScopeVariable); ❌


// block scope in the for loop statemetns

/* for (let index = 0; index < array.length; index++) {
  
  // 👇 Block scope
  const element = array[index];
  console.log(globalVariable); // ✅ global variables are available in the block scope
  
} */


// console.log(element); ❌


// 👉  Function scope (local scope)
/* const result = 10;

function subtract(x, y){
  const result = x - y
  console.log(result, 'Inside the function scope');
  return result
}
subtract(10, 9)
console.log(result); // this should be global, function scope variables are not available here.
//const result = subtract(10, 9) // this is a global variable
 */

// 💡 Variable scope



a = 0; // global variable
b = "buongiorno"  // global variable
var c = "ciao";  // global variable

saluta();

console.log("a is " + a); // a is 0
console.log("b is " + b); // b is buongiorno

function saluta() {
  var d = "asd";
  console.log("a is " + a); // a is  0
  // local scope
  var b = a + 1;
  console.log("b is " + b); // b is 1
  console.log(c); // c is ciao
}













// Arrow Functions live
// function declaration (subject to hoisting)
calcAge() // ✅ This is fine
function calcAge() {

}
calcAge() // ✅ This is fine



// function expression
// ReferenceError: Cannot access 'calcUserAge' before initialization
//calcUserAge() // ❌ Not hoisted (not allowed)

const calcUserAge = function () {
  console.log('I am a function expression');
  console.log('not hoisted');

}
// invoke the function expression (only after its declaration)
calcUserAge() // ✅ This is the only place where you can call the function


// Anon functions

/* function() {
  console.log('I am a function expression');
  console.log('not hoisted');

} */






// 📌 Arrow Function declaration

/* function sum(x, y) {
  const result = x + y
  return result
} */

// Syntax option 1
// (x, y): parenthesis mandatory
// {}: curly brackets parentesis mandatory
// return keywork: mandatory
/* const sum = (x, y) => {
  const result = x + y

  // explicit return  
  return result
}

// Invoke the function as always using its name
sum(10, 5)
 */


// Option 2 (not hoisted)
/* const sum = (x, y) => x + y

const result = sum(10, 5) // 15

 */







// Live coding from function declaration to arrow functions


/**
 * ## Split Word
 * Splits a given word into an array of characters and returns it
 * @param {String} word_to_split A word to split into an array of characters
 * @returns {Array}
 */
/* 
function splitWord(word_to_split) {
  const splitted_word = []
  for (let i = 0; i < word_to_split.length; i++) {
    const char = word_to_split[i]
    console.log(char);
    splitted_word.push(char)

  }
  //console.log(splitted_word);
  return splitted_word
} */

// 🏹 to arrow function
// with rounded parenthesis
// with curly brackets
// with return (explicit)
/* const splitWord = (word_to_split) => {
  const splitted_word = []
  for (let i = 0; i < word_to_split.length; i++) {
    const char = word_to_split[i]
    console.log(char);
    splitted_word.push(char)

  }
  // you MUST use a return keyword here to make data available outside
  return splitted_word
} */
// splitWord('fabio')

const splitWord = word_to_split => {
  const splitted_word = []
  for (let i = 0; i < word_to_split.length; i++) {
    const char = word_to_split[i]
    console.log(char);
    splitted_word.push(char)

  }
  // you MUST use a return keyword here to make data available outside
  return splitted_word
}
//splitWord('fabio')


/**
 * ## Array Reverse
 * Reverts an array of items
 * @param {array} splitted_word_arr An array of charcters to reverse
 * @returns {array}
 */
/* function array_reverse(splitted_word_arr) {
  const reversed_array = []
  for (let i = splitted_word_arr.length - 1; i >= 0; i--) {
    const char = splitted_word_arr[i]
    reversed_array.push(char)
  }
  //console.log(reversed_array);
  return reversed_array
} */

// to arrow function
/* const array_reverse = splitted_word_arr => {
  const reversed_array = []
  for (let i = splitted_word_arr.length - 1; i >= 0; i--) {
    const char = splitted_word_arr[i]
    reversed_array.push(char)
  }
  //console.log(reversed_array);
  return reversed_array
} */

//array_reverse(['a','b','c'])


/**
 * 
 * @param {Array} arr 
 * @returns {Array}
 */
function join_string(arr) {
  let joinString = ''
  
  for (let i = 0; i < arr.length; i++) {
    const char = arr[i]
    joinString += char
  }
  //console.log(joinString);
  return joinString
}

// without rounded parenthesis
const joinArryToString = arr => {
  let joinString = ''

  for (let i = 0; i < arr.length; i++) {
    const char = arr[i]
    joinString += char
  }
  //console.log(joinString);
  return joinString
}

const res = joinArryToString(['a', 'b', 'c'])
console.log(res); // abc


// shortcut vertion *without brackets
const joinArrToString = arr => arr.join('')
console.log(joinArrToString(['a', 'b', 'c']));


function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomNumb = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const randNumber = getRandomNumb(5, 55)
console.log(randNumber);


/**
 * 
 * @param {Number} numb 
 * @returns 
 */
function isEvenOrOdd(numb) {
  if (numb % 2 === 0) {
    return 'pari'
  }
  return 'dispari'
}




function isPalindom(word) {
  // split the word
  const splitted_word = splitWord(word)
  //console.log(splitted_word);

  // reverse the word
  const rev_word_arr = array_reverse(splitted_word)
  //console.log(rev_word_arr);

  // join the word
  const reversed_word = join_string(rev_word_arr)
  //console.log(reversed_word);

  // make the comparison

  // if is a palindrom 
  if (word.toLowerCase() === reversed_word.toLowerCase()) {
    // - return true
    return true

  }
  return false


}




function sum(x, y) {
  return x + y
}


function isEvenOrOdd(numb) {
  if (numb % 2 === 0) {
    return 'pari'
  }
  return 'dispari'
}

// with rounded and curly brackts
// return explicit
/* const isEven = (numb) => {
  if (numb % 2 === 0) {
    return 'pari'
  }
  return 'dispari'
} */




const isEven = numb => numb % 2 === 0 ? 'pari' : 'dispari'
console.log(isEven(12));

/* if(isEven(13)) {
  console.log('its even');
  
} else {
  console.log('its odd');
  
} */


