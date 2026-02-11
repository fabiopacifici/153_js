// DOM Manipulation

// 👉 get an element by its id from the dom (document object model *aka: how js sees the page) 
const itemEl = document.getElementById('item')
console.log(itemEl);
console.log(typeof itemEl);



// 👉  Query selector

const titleEl = document.querySelector('.title')
console.log(titleEl);
// takes only the first occurrence of the element
const divEl = document.querySelector('#item')
console.log(divEl);


console.log(
  document.querySelectorAll('.title')
)



// Operations of DOM elements

// 👉 read the value of class on a tag
console.log(divEl.classList); 

// 👉 add a new class using classList.add()
console.log(divEl.classList.add('mx-5'));

console.log(divEl.classList); 

// 👉 remove an element from the class
console.log(divEl.classList.remove('text-primary'));
console.log(divEl.classList); 


// 📌 Class name
// read
console.log(divEl.className);

// write (overwrite)
divEl.className = 'alert alert-danger'
console.log(divEl.className);

// update
divEl.className += ' px-5'

console.log(divEl.className);


// 📌 InnerHTML
// read the value of the innerHTML property
console.log(divEl.innerHTML)


// write in it (overwrites the entire content)
//divEl.innerHTML = 'Ciao'

// Update the content
divEl.innerHTML += 'Ciao'


// 📌 element.style
// read
console.log(divEl.style);


// set the css property 
divEl.style.color = 'gray'
divEl.style.width = '350px'

console.dir(divEl);


// Select the image
const imgEl = document.querySelector('img')
console.dir(imgEl);

imgEl.alt = 'A rando image'

divEl.append('Ciao')