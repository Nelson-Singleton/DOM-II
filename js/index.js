// Your code goes here

//random logo color on mouseover. Adjusted MDN example code--------------------------------------------
const headerLogo = document.querySelector('.logo-heading')

function randomNumber(max){
    let rand = Math.floor(Math.random() * max)
    return rand;
}
function changeLogo(event) {
    const textColor = 'rgb(' + randomNumber(255) + ',' + randomNumber(255) + ',' + randomNumber(255) + ')';
    headerLogo.style.color = textColor;
    
}
headerLogo.addEventListener('click', changeLogo)
//-----------------------------------------------------------------------------------

// nav button box shadow
const navLink = document.querySelector('.nav')

function changeNavLink(event) {
    navLink.style.boxShadow = "5px 5px 10px 10px green"
}  

navLink.addEventListener('mouseenter', changeNavLink)
//------------------------------------------------------------------------

//nav button remove shadow
function changeNavLinkAgain(event) {
    navLink.style.boxShadow = "5px 5px 10px 10px white"
    
}
navLink.addEventListener('mouseleave', changeNavLinkAgain)
//------------------------------------------------------------------------

//underline intro after scrolling with mouse wheel
const intro = document.querySelector('.intro')

function changeIntro(event){
    intro.style.textDecorationLine = "underline"
}

intro.addEventListener('wheel', changeIntro)

//------------------------------------------------------------------------

//Change text color on double click

const mainContent = document.querySelector(".text-content")
function changeContentSection(){
    mainContent.style.color = "red"   

}
mainContent.addEventListener('dblclick', changeContentSection)

//------------------------------------------------------------------------

//change cursor on bus image hover

const imageCursor = document.querySelector('img')
function changeCursor(event){
    imageCursor.style.cursor = "zoom-in"
    
}
imageCursor.addEventListener('mouseover', changeCursor)

//------------------------------------------------------------------------




/*  * `mouseover`
  * `keydown`
  * `wheel`
  * `load`
  * `focus`
  * `resize`
  * `scroll`
  * `select`
  * `dblclick`
  * `drag / drop`*/

  /* lecture notes
  console.log('project is up')

// 👉 TASK 1- Select the following elements from the DOM:

// BUTTONS
const launchButton = document.querySelector('#launchButton')
const confirmButton = document.querySelector('#confirmButton')
const cancelButton = document.querySelector('#cancelButton')

// MESSAGES
const successMessage = document.querySelector('h1.report.success')
const failureMessage = document.querySelector('h1.report.failure')

// MODAL
const modal = document.querySelector('.modal')

// 👉 TASK 2- Demo handling click events on button#launchButton, using:
//      - HTML
//      - The DOM's element.onclick
launchButton.onclick = function (event) {
  console.log('a bit better than doing it in the HTML')
  console.log(event)
}
//      - element.addEventListener()


// 👉 TASK 3- Create a function that launches!
// It should open the confirmation modal.
// Add it as an event listener for click events on the launch button.
function launch(event) {
  // anything we want to the DOM -- absolute power
  modal.classList.remove('off')
  successMessage.classList.add('off')
  failureMessage.classList.add('off')
}
launchButton.addEventListener('click', launch)


// 👉 TASK 4- Create a function to confirm the launch.
// It should close the modal and display a success report.
// Add it as a listener for clicks on the confirmation button.
function confirmLaunch(event) {
  modal.classList.add('off')
  successMessage.classList.remove('off')
}
confirmButton.addEventListener('click', confirmLaunch)

// 👉 TASK 5- Create a function to cancel the launch.
// It should close the modal and display a failure report.
// Add it as a listener for clicks on the cancellation button.
cancelButton.addEventListener('click', function (event) {
  modal.classList.add('off')
  failureMessage.classList.remove('off')
})

// 👉 TASK 6- Create a function that closes the modal if
// the user hits the Escape key on their keyboard.
// Add it as an event listener for 'keydown' events on document.
document.addEventListener('keydown', event => {
  // if the key pressed was ESC, dismiss the modal, otherwise nothing
  if (event.key === 'Escape') {
    modal.classList.add('off')
  } else {
    console.log('wrong key, buddy')
  }
})


// 👉 TASK 7- Add to ALL ELEMENTS ON THE PAGE an event listener for click events.
// It should console.log the target 🎯 of the event.
// It should also console.log the CURRENT target 🧭 of the event.
// Play with stopPropagation and stopImmediatePropagation.
Array.from(document.all).forEach(el => {
  el.addEventListener('click', function (event) {
    console.log('🎯 The target of the event', event.target)
    console.log('🧭 The current target     ', event.currentTarget)
    console.log('\n')

    // event.stopPropagation()
  })
})

// 👉 TASK 8- Select a link and prevent its default behavior
document.querySelector('a').addEventListener('click', event => {
  console.log('about to disrupt default behaviour of this link')

  event.preventDefault()
})

// 👉 TASK 9- Using the mouseover event on 'document',
// log to the console the X and Y coordinates
// of the mouse pointer, as it moves over the screen.


// 👉 TASK 10- [STRETCH] Create helper functions
function openModal() {

}

function closeModal() {

}

function killReports() {

}
*/