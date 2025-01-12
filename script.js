let slidesIndex = 1;
showSlides(slidesIndex);

function changeSlide(n) {
    showSlides(slidesIndex += n);
}

function setSlide(n) {
    showSlides(slidesIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slidesIndex = 1; }
    if (n < 1) { slidesIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slides.length > 0 && dots.length > 0) {
        slides[slidesIndex - 1].style.display = "block";
        dots[slidesIndex - 1].className += " active";
    }
}
