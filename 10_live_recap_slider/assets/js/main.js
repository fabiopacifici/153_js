console.log('Recap');


/* 

// Varibiles

// Data Types

// Dom manipulation

// For loop

// Conditionals

// Event Listeners

// Funtions

// Timing functions

*/


/* 
// Dato un array di oggetti, ciascuno dei quali rappresenta una slide con immagine, titolo e descrizione, crea uno slideshow che mostra la prima immagine e due pulsanti "prev" e "next".

// Quando l'utente clicca su "next", mostra l'immagine successiva

// Quando l'utente clicca su "prev", mostra l'immagine precedente

*/


// Given an array of objects each that represents a slide with *image, title, description create a slide show with The first image on screen and two buttons prev and next.


// When the user clicks next, show the next image

// When the user clicks prev, show the previous image


//console.log(slides); // 😮 Error
function renderActiveSlide(imageEl, activeSlide) {

  imageEl.src = activeSlide.image
  imageEl.alt = activeSlide.title

}

let slides = [
  {
    image: 'https://media.themoviedb.org/t/p/w500_and_h282_face/9zcbqSxdsRMZWHYtyCd1nXPr2xq.jpg',
    title: 'First Image',
    description: 'This is my first pic'
  },
  {
    image: 'https://media.themoviedb.org/t/p/w500_and_h282_face/wwftw0zuR80I1tEBQaiGjJWcX7p.jpg',
    title: 'Second Image',
    description: 'This is my first pic'
  },
  {
    image: 'https://media.themoviedb.org/t/p/w500_and_h282_face/qruRhG6jE5M8lWnW1AGOBxtdmCO.jpg',
    title: 'Third Image',
    description: 'This is my first pic'
  },
  {
    image: 'https://media.themoviedb.org/t/p/w500_and_h282_face/9zcbqSxdsRMZWHYtyCd1nXPr2xq.jpg',
    title: 'First Image',
    description: 'This is my first pic'
  }
]

let activeIndex = 0
let activeSlide = slides[activeIndex]

console.log(activeSlide.image);

// Dom Manupulation 
const slideEl = document.getElementById('slide')
console.log(slideEl);
// DOM API create the dom node for the image (img)
const imageEl = document.createElement('img')
// Set the image attributes (src, alt)
/* imageEl.src = activeSlide.image
imageEl.alt = activeSlide.title */
renderActiveSlide(imageEl, activeSlide)
console.log(imageEl);

// Adds the image into the parent element (div#slide)
slideEl.appendChild(imageEl)



// 📌 Event listeners
// Select the nodes to attach the events
const nextEl = document.querySelector('.next')
const prevEl = document.querySelector('.prev')

console.log(nextEl, prevEl);


function handleNext() {

  //console.log('You clicked next');

  // Increament the active slide index
  activeIndex++

  //console.log(activeIndex);
  
  if(activeIndex === slides.length) {
    // set active index to zero
    //console.log('Set the index back to zero');
    activeIndex = 0
    
  }
  //console.log(activeIndex);
  

  //console.log(activeSlide, activeIndex, slides);
  activeSlide = slides[activeIndex]

  renderActiveSlide(imageEl, activeSlide)



}

nextEl.addEventListener('click', handleNext)

// if you need to pass params to the function you must use an anonimous function
/* nextEl.addEventListener('click', function(){
  // now you can invoke your function and pass all params needed
  handleNext(10, 20)
}) */

function handlePrev() {
  console.log('You clicked prev');


  // decrement the active index of one

  // if active index in less than zero (-1) 
  // - set active index to the array.lenght - 1

  activeIndex--

  console.log(activeIndex);

  if (activeIndex === -1) {
    // set active index to zero
    console.log('Set the index back to zero');
    activeIndex = slides.length - 1

  }
  console.log(activeIndex);


  console.log(activeSlide, activeIndex, slides);
  activeSlide = slides[activeIndex]

  renderActiveSlide(imageEl, activeSlide)



  
}

prevEl.addEventListener('click', handlePrev)



// 📌 Thumbnails
//     <img width="140" src="https://media.themoviedb.org/t/p/w500_and_h282_face/9zcbqSxdsRMZWHYtyCd1nXPr2xq.jpg" alt="">



// Select the DOM node for the thumns element (thumbs)
const thumbsEl = document.querySelector('.thumbs')
// Loop over the array of slides 
// - for every slide we:
for (let i = 0; i < slides.length; i++) {
  const {image} = slides[i];
  console.log(image);
  // - create the markup element (⚠️ its a string)
  const markup = ` <img width="140" src="${image}" alt="">`
  console.log(markup);
  // - append into the DOM inside the thums element 
  //thumbsEl.insertAdjacentHTML('beforeend', markup)
  thumbsEl.innerHTML = thumbsEl.innerHTML + markup
}


// Start the autoplay when the page loads

let autoplayId = setInterval(handleNext, 3000)
const containerEl = document.querySelector('.container')
// when the user mouse enters the slide we stop the autoplay
containerEl.addEventListener('mouseenter', function(){
  //console.log('stop the autoplay');
  clearInterval(autoplayId)
  
})
// when the user mouse out the slide we restart the autoplay
containerEl.addEventListener('mouseleave', function () {
  //console.log('start the autoplay');

  autoplayId = setInterval(handleNext, 3000)
})


// Select all thums on the page and attach an event llistener on each one. 
// - when clicked it should log its index
const thumbsNodeList = document.querySelectorAll('.thumbs img')
console.log(thumbsNodeList);


for (let i = 0; i < thumbsNodeList.length; i++) {
  const element = thumbsNodeList[i];
  console.log(element);
  
  element.addEventListener('click', function(){
    console.log(i);
    activeIndex = i
    console.log(activeSlide);
    activeSlide = slides[activeIndex]
    renderActiveSlide(imageEl, activeSlide )
  })
}