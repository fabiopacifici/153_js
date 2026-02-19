function renderActiveSlide(imageEl, activeSlide) {

  imageEl.src = activeSlide.image
  imageEl.alt = activeSlide.title

}


function renderThumbnails(thumbsEl, slides) {
  for (let i = 0; i < slides.length; i++) {
    const { image } = slides[i];
    console.log(image);
    // - create the markup element (⚠️ its a string)
    const markup = ` <img width="140" src="${image}" alt="">`
    console.log(markup);
    // - append into the DOM inside the thums element 
    //thumbsEl.insertAdjacentHTML('beforeend', markup)
    thumbsEl.innerHTML = thumbsEl.innerHTML + markup
  }
}


function makeThumbsInteractive(thumbsNodeList, activeIndex, activeSlide) {

  for (let i = 0; i < thumbsNodeList.length; i++) {
    const element = thumbsNodeList[i];
    console.log(element);

    element.addEventListener('click', function () {
      console.log(i);
      activeIndex = i
      console.log(activeSlide);
      activeSlide = slides[activeIndex]
      renderActiveSlide(imageEl, activeSlide)
    })
  }
}

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


function handleNext() {

  //console.log('You clicked next');

  // Increament the active slide index
  activeIndex++

  //console.log(activeIndex);

  if (activeIndex === slides.length) {
    // set active index to zero
    //console.log('Set the index back to zero');
    activeIndex = 0

  }
  //console.log(activeIndex);


  //console.log(activeSlide, activeIndex, slides);
  activeSlide = slides[activeIndex]

  renderActiveSlide(imageEl, activeSlide)



}

function stopAutoplay() {
  clearInterval(autoplayId)
}


function startAutplay() {
  autoplayId = setInterval(handleNext, 3000)
}