// sum

function sum(numb_1, numb_2){
  return numb_1 + numb_2 // 👈 we use the return keyword here
}
// multiply
function multiply(numb_1, numb_2) {
  const result = numb_1 * numb_2

  return result // 👈 we use the return keyword here
}

// subtraction
function subtraction(numb_1, numb_2) {
  const result = numb_1 - numb_2

  return result // 👈 we use the return keyword here
} 

// division
function division(numb_1, numb_2) {
  const result = numb_1 / numb_2

  return result // 👈 we use the return keyword here
}



console.log(sum(5, 9));
console.log(multiply(4, 9));
console.log(subtraction(5, 9));
console.log(division(90, 9));


// 📌 Roll the dice

//const dice = Math.floor(Math.random() * 6) + 1


// log the rolled dice
function logRolledDice(){

  const dice = Math.floor(Math.random() * 6) + 1
  console.log(`You rolled the dice, result: ${dice}`);
  
}
logRolledDice()

// print the rolled dice
function printRolledDice(){
  const dice = Math.floor(Math.random() * 6) + 1
  const message = `You rolled the dice, result: ${dice}`
  //console.log(`You rolled the dice, result: ${dice}`);

  document.writeln(message)

}

printRolledDice()


// get the rolled dice

function rollerdDice(){
  const dice = Math.floor(Math.random() * 6) + 1
  const message = `You rolled the dice, result: ${dice}`

  return message

}

console.log(rollerdDice());
const res = rollerdDice();

console.log(res);



// 📌 Celsius converter (celsius to fahrenheit)

// - log the result 
function logCelsiusToFahrenheit(celsius){
  // do th operation
  const toFahrenheit = (celsius * 9/5) + 32

  // log the result
  console.log(toFahrenheit);
  
}
logCelsiusToFahrenheit(30)

// Nevrt use globsal variables inside function declaration
//❌const celsius = 20

// - print the result
function printCelsiusToFahrenheit(celsius){
  // do th operation
  const toFahrenheit = (celsius * 9 / 5) + 32

  // log the result
  console.log(toFahrenheit);
  document.writeln(toFahrenheit)
}

// - returns the result
function celsiusToFahrenheit(celsius) {
  // do th operation
  const toFahrenheit = (celsius * 9 / 5) + 32

  // log the result
  //console.log(toFahrenheit);
  // return the result outside
  return toFahrenheit
}


const conversion = celsiusToFahrenheit(40)
console.log(conversion);


