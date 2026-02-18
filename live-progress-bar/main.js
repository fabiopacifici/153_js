console.log('it works');

// select the dom nodes 
const progressBarEl = document.querySelector('.progress-bar')
const uploadButtonEl = document.getElementById('upload-button')
const messageEl = document.getElementById('message')

console.log(progressBarEl, uploadButtonEl, messageEl);


// attach an event listener to the button 
uploadButtonEl.addEventListener('click', function () {
  console.log('clicked');

  // disable the upload button
  uploadButtonEl.disabled = true

  // initialize our progress counter
  let progress = 0
  let progressPercentValue = progress + '%'
  console.log(progress, progressPercentValue );
  
  // update the dom with the progress values
  // - update the witdh
  progressBarEl.style.width = progressPercentValue
  // - update the innerText
  progressBarEl.innerText = progressPercentValue

  // set the interval every 1000ms

  const intervalId = setInterval(function () {
    // IF progress counter is equal to 100
    if(progress === 100) {
      // - show the completation message
      messageEl.classList.remove('d-none')
      // - clear the interval using the interval id
      clearInterval(intervalId)
      // - update the button text to say "Upload"
      uploadButtonEl.disabled = false
      uploadButtonEl.innerText = 'Upload'

    } else {
      messageEl.classList.add('d-none')
      // ELSE
      // - increment the progress counter 
      progressPercentValue = ++progress + '%'
      // - update the ui (width and innerText of the progress-bar)
      // - update the witdh
      progressBarEl.style.width = progressPercentValue
      // - update the innerText
      progressBarEl.innerText = progressPercentValue

      // update the button text to say "Uploading"
      uploadButtonEl.innerText = 'Uploading ...'

    }
  }, 100)


})