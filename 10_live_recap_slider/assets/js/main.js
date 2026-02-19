
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
renderActiveSlide(imageEl, activeSlide)
console.log(imageEl);

// Adds the image into the parent element (div#slide)
slideEl.appendChild(imageEl)



// 📌 Event listeners
// Select the nodes to attach the events
const nextEl = document.querySelector('.next')
const prevEl = document.querySelector('.prev')

console.log(nextEl, prevEl);


nextEl.addEventListener('click', handleNext)

prevEl.addEventListener('click', handlePrev)



// 📌 Thumbnails
// Select the DOM node for the thumns element (thumbs)
const thumbsEl = document.querySelector('.thumbs')
// Loop over the array of slides 
// - for every slide we:
renderThumbnails(thumbsEl, slides)


// Start the autoplay when the page loads

let autoplayId = setInterval(handleNext, 3000)
const containerEl = document.querySelector('.container')
// when the user mouse enters the slide we stop the autoplay
containerEl.addEventListener('mouseenter', stopAutoplay)


// when the user mouse out the slide we restart the autoplay
containerEl.addEventListener('mouseleave', startAutplay)

// Select all thums on the page and attach an event llistener on each one. 
// - when clicked it should log its index
const thumbsNodeList = document.querySelectorAll('.thumbs img')
console.log(thumbsNodeList);

makeThumbsInteractive(thumbsNodeList, activeIndex, activeSlide)


