document.addEventListener('DOMContentLoaded',function(){
AOS.init();

var backToTopButton = document.querySelector(".upButton");
var section2 = document.querySelector(".section__3");
backToTopButton.style.display = "none";

window.onscroll = function() {
  if (document.body.scrollTop > section2.offsetTop || document.documentElement.scrollTop > section2.offsetTop) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};
})

function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile__dropdown');
    mobileMenu.classList.toggle('mobile-menu-clicked');

    const mobileMenu2 = document.querySelector('.mobile__dropdown1');
    mobileMenu2.classList.toggle('mobile-menu-clicked2');

    const mobileMenu3 = document.querySelector('.mobile__menu');
    mobileMenu3.classList.toggle('mobile-menu-clicked3');
}


AOS.init();

AOS.init({
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});




function scrollToTop() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

