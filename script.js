let slidesIndex = 1;
const titles = ["Title 1", "Title 2", "Title 3"];
const descriptions = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit tortor quis aliquam pulvinar. In cursus tincidunt magna, eget feugiat velit tincidunt sit amet. Nunc molestie tellus eget urna bibendum, ac efficitur urna pretium. Mauris eu posuere elit. Nunc ac sollicitudin dui, sit amet feugiat risus. Quisque convallis sagittis velit sit amet facilisis. Donec viverra ante suscipit, aliquet ligula et, congue eros. Mauris cursus pharetra fermentum. Ut sodales leo ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam ut ultricies dolor, sit amet ullamcorper quam. Nam sed varius neque.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quam ex, elementum eget congue sit amet, malesuada sed lectus. Maecenas porta aliquet dui vel lacinia. Suspendisse ornare libero ligula, et tincidunt risus varius et. Nunc sapien erat, mollis ut bibendum nec, placerat et ex. Vivamus faucibus ex id pretium gravida. Nam fringilla vehicula scelerisque. Donec et luctus nibh. Suspendisse interdum est vitae urna egestas, vitae aliquet dolor mollis. In id elit ut turpis egestas hendrerit. Integer id tortor leo. Nam a varius dolor, vitae auctor massa. Quisque rhoncus sagittis lobortis. Donec viverra justo ac tristique condimentum. Vestibulum nec hendrerit ex. Curabitur eget tellus ipsum. Aenean finibus mauris non arcu aliquam, at placerat lacus malesuada.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae libero ex. Cras a volutpat ex. Nulla facilisi. Curabitur molestie mauris vel libero lobortis, ut sodales tellus lacinia. Donec in ultricies mi, vitae lacinia nibh. Curabitur ante sem, laoreet aliquet vulputate sit amet, laoreet id tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras eget augue et nisi ornare ultrices et quis augue. Etiam vel porttitor ipsum. Donec lacinia ligula vitae bibendum imperdiet. Praesent sit amet condimentum nibh. Nunc metus felis, rhoncus eu commodo sit amet, sagittis ut augue. Pellentesque elementum lectus eu quam posuere euismod."];

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

    if (n > slides.length) {
        slidesIndex = 1;
    }
    if (n < 1) {
        slidesIndex = slides.length;
    }
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






// Objets de traduction + exemple : <h1 data-key="title">Bienvenue sur notre site</h1>
const translations = {
    fr: {
        button: "English",
        slogan: "Récolter, construisez et combattez !"
    },
    en: {
        button: "Français",
        slogan: "Farm, build and fight !"
    }
};

// Langue par défaut
let currentLanguage = 'fr';

// Fonction pour changer la langue
function toggleLanguage() {
    // Basculer entre les langues
    currentLanguage = currentLanguage === 'fr' ? 'en' : 'fr';

    // Mettre à jour le contenu
    updateContent();
}

// Mettre à jour les textes de la page
function updateContent() {
    const elements = document.querySelectorAll("[data-key]");
    elements.forEach(el => {
        const key = el.getAttribute("data-key");
        el.textContent = translations[currentLanguage][key];
    });

    // Mettre à jour le texte du bouton
    document.getElementById("language-btn").textContent = translations[currentLanguage].button;
}

// Initialiser le contenu
updateContent();

// Fonction pour calculer la taille de l'écran en pouces
function getScreenSizeInInches() {
    // Résolution de l'écran en pixels
    const widthPixels = screen.width;
    const heightPixels = screen.height;

    // Estimation du DPI (DPI moyen pour un écran standard : 96)
    const dpi = window.devicePixelRatio * 96;

    // Calcul de la taille en pouces
    const diagonalPixels = Math.sqrt(widthPixels ** 2 + heightPixels ** 2);
    const screenSizeInInches = diagonalPixels / dpi;

    return screenSizeInInches.toFixed(2); // Arrondi à 2 décimales
}