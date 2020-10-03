// -------------------------------Declarations---------------------------------- //

// - header -

const hamburgerBtn = document.querySelector('.hamburger');
const navLinks = document.querySelectorAll('.link');

// - hero -

const scrollBtn = document.querySelector('.fade-button');

// - skills - 

const sliderBtn = document.querySelector('.slider-wrapper');

// -------------------------------Event Listeners------------------------------- //

// - header -

hamburgerBtn.addEventListener('click', clickOpen);
hamburgerBtn.addEventListener('touchstart', touchOpen);

// - hero -

scrollBtn.addEventListener('mouseenter', addDark);
scrollBtn.addEventListener('mouseleave', removeDark);

// - skills -

sliderBtn.addEventListener('mouseenter', slideRight);
sliderBtn.addEventListener('mouseleave', slideLeft);

// -------------------------------Functions------------------------------------- //

// - header 

function clickOpen(clickEvent) {
  clickEvent.preventDefault();
  clickEvent.stopPropagation();
  //get navbar
  const navMenu = document.querySelector('.navbar');
  //add active class to navbar
  navMenu.classList.toggle('navbar-active');
}

function touchOpen(touchEvent) {
  touchEvent.preventDefault();
  touchEvent.stopPropagation();
  //get navbar
  const navMenu = document.querySelector('.navbar');
  //add active class to navbar
  navMenu.classList.toggle('navbar-active');
}

navLinks.forEach(link => {
  if ('ontouchstart' in document.documentElement === true) {
    link.addEventListener('touchstart', (e) => {
      e.stopPropagation();
      //get navbar
      const navMenu = document.querySelector('.navbar');
      //remove active class to navbar
      navMenu.classList.remove('navbar-active');
    });
  } else {
    link.addEventListener('click', (e) => {
      e.stopPropagation();
      //get navbar
      const navMenu = document.querySelector('.navbar');
      //remove active class to navbar
      navMenu.classList.remove('navbar-active');
    });
  }
})

// - hero -

function addDark() {
  // get hero class
  const hero = document.querySelector('.hero');
  //get greeting-container p
  const greetingText = document.querySelector('.greeting-container p')
  //add hero-dark class
  hero.classList.add('hero-dark');
  //add timing function
  setTimeout(function () {
    // change text
    greetingText.innerText = "I'm a";
    // get name-wrapper
    const nameText = document.querySelector('.name');
    // change text
    nameText.innerHTML = '<span style="color: tomato;">Front End</span> <br> Web Developer';
  }, 240);
}

function removeDark() {
  // get hero class
  const hero = document.querySelector('.hero');
  //get greeting-container p
  const greetingText = document.querySelector('.greeting-container p')
  //remove hero-dark class
  hero.classList.remove('hero-dark');
  //add timing function
  setTimeout(function () {
    // change text
    greetingText.innerText = "Hello, I'm";
    // get name-wrapper
    const nameText = document.querySelector('.name');
    // change text
    nameText.innerHTML = 'Andrew A. <br> Oyanguren';
  }, 220);
}

// - skills -

function slideRight(e) {
  e.stopPropagation();
  //get info-container
  const slideObject = document.querySelector('.info-container');
  //translate right 50%
  slideObject.style.transform = 'translate(50%)';
}

function slideLeft(e) {
  e.stopPropagation();
  //get info-container
  const slideObject = document.querySelector('.info-container');
  //translate right 50%
  slideObject.style.transform = 'translate(0)';
}

