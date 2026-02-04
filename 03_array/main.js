console.log('Array');
// Array definition (creo l'array)
//               0    1   2    3  4
/* const numbers = [20, 10, 222, 32, 41] // totale elementi 5

// Access array's elements by their index
const saved_number = numbers[2]
console.log(numbers[4]); // 41
console.log(saved_number);

// Arrays are shows as objects (js wraps arrays into objects to provide featues)
console.log(typeof numbers); */

//TypeError: Assignment to constant variable.
//numbers = 'ciao' // const cannot be re-assigned


/* const movies = [
  'starwars',
  'initation game',
  'mandalorian',
  'avatar'
]
console.log(movies);
console.log(movies.length); // length returs the length of the array


console.log(movies[0]); // starwars



const mixed_values = ['ciao', 10, true, ['anakin', 'antifa', 'grogu', 'jabba', 'mando', 'cookie', 'mutina', 'gaza', 'sabbia', 'venomino']]

console.log(mixed_values[3]); // array
//console.log(mixed_values[4]); undefined

const cats_list = mixed_values[3] // array
console.log(cats_list[6]); // mutina

console.log(mixed_values[3][6]); */


// Update the array adding a new element to the end of the array
/* cats_list.push('Venom')
console.log(cats_list);
cats_list.push('fabio')
 */
// add new elemetns at the beginning
/* cats_list.unshift('Mario') */

// remove the last element
/* cats_list.pop() */

// remove the first element

/* cats_list.shift() */
// assignment error *cont
//cats_list = []


//📌 Array + loops

/* // ❌ Print the array elements 
console.log(cats_list[0]); // index: 0
console.log(cats_list[1]); // index: 1
console.log(cats_list[2]);
console.log(cats_list[3]);
console.log(cats_list[4]);
console.log(cats_list[5]);
console.log(cats_list[6]);
console.log(cats_list[7]);
console.log(cats_list[8]);
console.log(cats_list[9]); // index: 9
// how do you find the array length?
console.log(cats_list.length); // 10
console.log(cats_list[10]); // undefined

 */


// ✅ with a for loop

/* for(let i = 0; i < 10; i++){
  // your code here

}


const last_item = 'Mario'

for(let index = 0; index < cats_list.length; index++) {
  console.log(index);

  console.log(cats_list[index]);
  console.log(last_item);

  const my_variable = 12
  //console.log(my_variable);
  
  
  
}
console.log(my_variable);

console.log(index); */

// iterations example
//1. index = 0 -> cats_list[index] -> cats_list[0]
//2. index = 1 -> cats_list[index] -> cats_list[1]
//3. index = 2 -> cats_list[index] -> cats_list[2]
//4. index = 3 -> cats_list[index] -> cats_list[3]
//5. index = 4 -> cats_list[index] -> cats_list[4]
//6. index = 5 -> cats_list[index] -> cats_list[5]
//7. index = 6 -> cats_list[index] -> cats_list[6]
//8. index = 7 -> cats_list[index] -> cats_list[7]
//9. index = 8 -> cats_list[index] -> cats_list[8]
//10. index = 9 -> cats_list[index] -> cats_list[9]
///




/* 📌 Strings are sequences of characters */


//                 01234
/* const firstName = 'fabio' // totale elementi 5
console.log(numbers);
 */

//  📌 Recap

// cos'e' u array? Un array e' una lista di elementi ...accordion

// 1. How to define an array
const things_to_learn = ['learn js','learn react', 'learn php', 'learn Laravel']

// 2. How to access array's elements?
// we use the index of the element to access
// array's starts from 0
//    index:0     index: 1       index: 2      index: 3
// ['learn js','learn react', 'learn php', 'learn Laravel']

// 👉 read the element fro mthe array
console.log(things_to_learn[2]);


// 👉 updata the value of an element in the array
things_to_learn[2] = 'Learn PHP 8.5'

console.log(things_to_learn);

// 👉 add an element at the end of the array
things_to_learn.push('mysql', 'python')
// 👉 add an element from the beginning of the array
things_to_learn.unshift('learn bash', 'learn HTML')

console.log(things_to_learn);

// 👉 remove an element from the end of the array
things_to_learn.pop()
// 👉s remove an element from the beginning of the array 
things_to_learn.shift()
console.log(things_to_learn);


// 📌 Array + loops

for (let index = 0; index < things_to_learn.length; index++) {
  const element = things_to_learn[index];

  console.log(element);
  
}