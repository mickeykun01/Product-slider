


// var slideIndex = 1;
// var slideInterval;

// function plusSlides(n) {
//     clearInterval(slideInterval);
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     clearInterval(slideInterval);
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName('mySlides');
//     var dots = document.getElementsByClassName('dot');

//     if (n > slides.length) {
//         slideIndex = 1;
//     }
//     if (n < 1) {
//         slideIndex = slides.length;
//     }

//     for (i = 0; i < slides.length; i++) {
//         slides[i].classList.remove('slideFromLeft', 'slideFromRight', 'slideIn');
//         slides[i].style.display = "none";
//     }

//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }

//     var directionClass = n > slideIndex ? 'slideFromRight' : 'slideFromLeft';
//     slides[slideIndex - 1].classList.add(directionClass, 'slideIn');
//     slides[slideIndex - 1].style.display = 'block';

//     // Trigger reflow to apply styles immediately
//     void slides[slideIndex - 1].offsetWidth;

//     slides[slideIndex - 1].classList.remove('slideFromLeft', 'slideFromRight', 'slideIn');
//     slides[slideIndex - 1].classList.add('slideIn');

//     dots[slideIndex - 1].className += " active";

//     // Set automatic sliding interval
//     slideInterval = setInterval(function () {
//         plusSlides(1);
//     }, 5000);
// }

// // Call showSlides to start the automatic sliding
// showSlides(slideIndex);

var slideIndex = 0;
var slideInterval;

function plusSlides(n) {
    clearInterval(slideInterval);
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    clearInterval(slideInterval);
    showSlides(slideIndex = n - 1);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('mySlides');
    var dots = document.getElementsByClassName('dot');

    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.transform = "translateX(-100%)";
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = 'block';
    slides[slideIndex].style.transform = "translateX(0)";
    dots[slideIndex].className += " active";

    // Set automatic sliding interval
    slideInterval = setInterval(function () {
        plusSlides(1);
    }, 5000);
}

// Call showSlides to start the automatic sliding
showSlides(slideIndex);
