/*!
* Start Bootstrap - Grayscale v7.0.4 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 
const a = document.getElementById('house');
const b = document.getElementById('apartment');
const c = document.getElementById('public');
let price = 0;
let estimate = 0;
function houseButton(){

    a.style.borderWidth = "0.5vw";
    a.style.borderColor = "rgba(0,0,255,0.5)";
    b.style.borderWidth = "0vw";
    c.style.borderWidth = "0vw";
    price = 0;
    event.preventDefault();

}
function buildingButton(){
    b.style.borderColor = "rgba(0,0,255,0.5)";
    b.style.borderWidth = "0.5vw";
    a.style.borderWidth = "0vw";
    c.style.borderWidth = "0vw";
    price = 1;
    event.preventDefault();
}
function publicButton(){
    c.style.borderColor = "rgba(0,0,255,0.5)";
    c.style.borderWidth = "0.5vw";
    a.style.borderWidth = "0vw";
    b.style.borderWidth = "0vw";
    price = 2;
    event.preventDefault();
}

function calculate(){
    const length = document.getElementById('length').value;
    const width = document.getElementById('width').value;
    console.log("l: " + length + "w: " + width);
    estimate = (parseInt(length)*parseInt(width)) * (0.02 * (price + 1));
    if(estimate < 1000){
        estimate = 1000
    } 
    console.log("estimate price: " + estimate);
    const est = document.getElementById('estimate')
    est.textContent = ("Estimate price: $" + estimate.toFixed(2));
    event.preventDefault();
}

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});