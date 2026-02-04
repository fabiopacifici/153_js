console.log('It works');


/* Conditionals */


/* Relational operators */

const age = 20

// equality operator *equal to
// checks onlly the value not the data type
console.log(age == 20); // true
console.log(age == '20'); // true

// identity operator
// checks also the data types
console.log(age === 20);
console.log(typeof age, typeof 20);
console.log(age === '20');
console.log(typeof age, typeof '20');

// not identity
console.log(age !== 20); // false
console.log(age !== '20'); // true


// greather than
console.log(age > 10); // true
console.log(age >= 10); // true



// less than
console.log(age < 10); // false
console.log(age <= 10); // false


// Conditional statements

/* Syntax only 

if(condition){
// your code here 
}

*/

console.log(age !== 20);

if (age !== 20) {
  console.log('The condition was true! I am running');
} else {
  console.log('The condition was false! I am running in the else block');

}


const students_number = 30;

console.log(age !== 20, 'first');
console.log(students_number > 10, 'second');


if (age !== 20 || students_number > 10) {
  console.log('If block with logical expression');

}
console.log('I am outside the conditional block');



// Not


let utenteLoggato = false;

console.log(!utenteLoggato);

if (!utenteLoggato) {

  // questo blocco di istruzioni sarà eseguito
  // perchè !false === true

  console.log('Acting on logged users?');
  
} 




