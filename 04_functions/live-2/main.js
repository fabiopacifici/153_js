// 📌 Js Functions

// function declaration
// - without params
function myFunction() {

}

// - with params
// you can pass all params you need
function anotherFunction(param_1, param_2, param_3) {

}


// - without/with return
function getFunctionData(param_1, param_2, param_3) {

  // your logic here

  // Data you want to return (outside the function scope)

  return 'data to return here'
}


// Invoke the function

// - invoke a function that has no params
myFunction()

// - invoke a function that has no params
anotherFunction('value1', 12, true)


// ------------------------------------------------------------

// Reverse string
// createa function that given a string returns it reversed

const word_to_reverse = 'Antifa'
/* let reversed_word = ''

for(let i = word_to_reverse.length - 1; i >= 0; i-- ){
  const char = word_to_reverse[i]
  reversed_word += char

}

console.log(reversed_word); */

function getReversedWord(word) {
  let reversed_word = ''

  for (let i = word.length - 1; i >= 0; i--) {
    const char = word[i]
    reversed_word += char

  }

  //console.log(reversed_word);
  return reversed_word

}

const reversed_word = getReversedWord(word_to_reverse)
console.log(reversed_word);

console.log(getReversedWord('Antifa'));


// 👉 Capitalize Word




/* 
// get the first letter and transform it to uppercase *chatAt(0).toUpperCase()
const firstLetter = myWord.charAt(0).toUpperCase()
// get the rest of the string and put it in lowercase .substring(1).toLowerCase()
const restOrWord = myWord.substring(1).toLowerCase()
// get the full word by contatenation firstChar and restOfWord
const capitalizedWord = firstLetter + restOrWord
// log the result
console.log(capitalizedWord); */

// word is your parameter (abstract until you pass the argument)
function getCapitalizedWord(word) {

  // get the first letter and transform it to uppercase *chatAt(0).toUpperCase()
  const firstLetter = word.charAt(0).toUpperCase()
  // get the rest of the string and put it in lowercase .substring(1).toLowerCase()
  const restOrWord = word.substring(1).toLowerCase()
  // get the full word by contatenation firstChar and restOfWord
  const capitalizedWord = firstLetter + restOrWord


  return capitalizedWord
}

// argument (value) to pass to the function
const myWord = 'anakin' // Anakin
//1. store the result into a variable
const capitalized = getCapitalizedWord(myWord) // 'Anakin'
console.log(capitalized);

// or log the result directly
console.log(getCapitalizedWord(myWord));

/* 
const userWord = prompt('Give a lowercase word, and i will capitalize it' )
// Cristian is your argument
console.log(getCapitalizedWord(userWord));  */


// --------------------------------------------------------------------------




const textTocapitalize = 'this is a long Text not really capitalized'


//console.log(getCapitalizedWord(textTocapitalize));
/* 
// use split to divide the text into an array of words
const splittedText = textTocapitalize.split(' ')
console.log(splittedText);
// create an empty array where store the capitalized words
const capitalizedWordsArr = []

// loop over the array of words

for (const word of splittedText) {
  //console.log(word);
  // - for eveyword get the first character
  // - make the char uppercase
  const firstChar = word.charAt(0).toUpperCase()
  // - get the rest of the string and put it in lowercase .substring(1).toLowerCase()
  const restOfWord = word.substring(1).toLowerCase()
  // - get the full word by contatenation firstChar and restOfWord
  const finalWord = firstChar + restOfWord
  console.log(finalWord);
  // - push the capitalized word into a dedicated array
  capitalizedWordsArr.push(finalWord)
}

console.log(capitalizedWordsArr);

// join the array back to a text
const capitalizedText = capitalizedWordsArr.join(' ')

// return the capitalized text
console.log(capitalizedText); */

// with a Function

const text = capitalizeText(textTocapitalize)
console.log(text);

function capitalizeText(textTocapitalize) {

  // use split to divide the text into an array of words
  const splittedText = textTocapitalize.split(' ')
  console.log(splittedText);
  // create an empty array where store the capitalized words
  const capitalizedWordsArr = []

  // loop over the array of words

  for (const word of splittedText) {
    //console.log(word);
    // - for eveyword get the first character
    // - make the char uppercase
    const firstChar = word.charAt(0).toUpperCase()
    // - get the rest of the string and put it in lowercase .substring(1).toLowerCase()
    const restOfWord = word.substring(1).toLowerCase()
    // - get the full word by contatenation firstChar and restOfWord
    const finalWord = firstChar + restOfWord
    //console.log(finalWord);
    // - push the capitalized word into a dedicated array
    capitalizedWordsArr.push(finalWord)
  }

  //console.log(capitalizedWordsArr);

  // join the array back to a text
  const capitalizedText = capitalizedWordsArr.join(' ')

  // return the capitalized text
  //console.log(capitalizedText);
  return capitalizedText

}






console.log(capitalizeText('Lorem ipsum dolor sit amet, consectetur adipisicing elit.Minus nobis enim aut assumenda voluptatum sapiente odit nam accusamus minima rerum quibusdam obcaecati error distinctio voluptas, consequatur, officia ea.Ullam, possimus'));



console.log(capitalizeText('this is oyher tyext yto capitalize '));