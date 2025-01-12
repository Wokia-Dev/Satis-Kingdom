let slidesIndex = 1;
const titles = ["Title 1", "Title 2", "Title 3"];
const descriptions = [
    "This is the description for the first slide. It explains the first aspect of the game.",
    "This is the description for the second slide. It provides details on the second feature.",
    "This is the description for the third slide. It highlights the third key element."
];

let autoSlideInterval;
let isMouseOver = false;

showSlides(slidesIndex);
startAutoSlide();

// Change slide manually
function changeSlide(n) {
    showSlides(slidesIndex += n);
}

// Set a specific slide
function setSlide(n) {
    showSlides(slidesIndex = n);
}

// Show the current slide
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    let title = document.getElementById("slideTitle");
    let description = document.getElementById("slideDescription");

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

        // Update title and description
        title.textContent = titles[slidesIndex - 1];
        description.textContent = descriptions[slidesIndex - 1];
    }
}

// Start automatic slide change
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        if (!isMouseOver) {
            changeSlide(1);
        }
    }, 10000);
}


