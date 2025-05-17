let slidesIndex = 1;
let currentLanguage = 'fr';

const titles = ["Titre 1", "Titre 2", "Titre 3"];
const descriptions = ["Je suis francais 1 ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit tortor quis aliquam pulvinar. In cursus tincidunt magna, eget feugiat velit tincidunt sit amet. Nunc molestie tellus eget urna bibendum, ac efficitur urna pretium. Mauris eu posuere elit. Nunc ac sollicitudin dui, sit amet feugiat risus. Quisque convallis sagittis velit sit amet facilisis. Donec viverra ante suscipit, aliquet ligula et, congue eros. Mauris cursus pharetra fermentum. Ut sodales leo ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam ut ultricies dolor, sit amet ullamcorper quam. Nam sed varius neque.",
    "Je suis francais 2 ipsum dolor sit amet, consectetur adipiscing elit. Nam quam ex, elementum eget congue sit amet, malesuada sed lectus. Maecenas porta aliquet dui vel lacinia. Suspendisse ornare libero ligula, et tincidunt risus varius et. Nunc sapien erat, mollis ut bibendum nec, placerat et ex. Vivamus faucibus ex id pretium gravida. Nam fringilla vehicula scelerisque. Donec et luctus nibh. Suspendisse interdum est vitae urna egestas, vitae aliquet dolor mollis. In id elit ut turpis egestas hendrerit. Integer id tortor leo. Nam a varius dolor, vitae auctor massa. Quisque rhoncus sagittis lobortis. Donec viverra justo ac tristique condimentum. Vestibulum nec hendrerit ex. Curabitur eget tellus ipsum. Aenean finibus mauris non arcu aliquam, at placerat lacus malesuada.",
    "Je suis francais 3 ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae libero ex. Cras a volutpat ex. Nulla facilisi. Curabitur molestie mauris vel libero lobortis, ut sodales tellus lacinia. Donec in ultricies mi, vitae lacinia nibh. Curabitur ante sem, laoreet aliquet vulputate sit amet, laoreet id tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras eget augue et nisi ornare ultrices et quis augue. Etiam vel porttitor ipsum. Donec lacinia ligula vitae bibendum imperdiet. Praesent sit amet condimentum nibh. Nunc metus felis, rhoncus eu commodo sit amet, sagittis ut augue. Pellentesque elementum lectus eu quam posuere euismod."];

// pas utiliser mais on sait jamais
const titles_en = ["Title 1", "Title 2", "Titlee 3"];
const descriptions_en = ["Je suis anglais 1 ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit tortor quis aliquam pulvinar. In cursus tincidunt magna, eget feugiat velit tincidunt sit amet. Nunc molestie tellus eget urna bibendum, ac efficitur urna pretium. Mauris eu posuere elit. Nunc ac sollicitudin dui, sit amet feugiat risus. Quisque convallis sagittis velit sit amet facilisis. Donec viverra ante suscipit, aliquet ligula et, congue eros. Mauris cursus pharetra fermentum. Ut sodales leo ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam ut ultricies dolor, sit amet ullamcorper quam. Nam sed varius neque.",
    "Je suis anglais 2 ipsum dolor sit amet, consectetur adipiscing elit. Nam quam ex, elementum eget congue sit amet, malesuada sed lectus. Maecenas porta aliquet dui vel lacinia. Suspendisse ornare libero ligula, et tincidunt risus varius et. Nunc sapien erat, mollis ut bibendum nec, placerat et ex. Vivamus faucibus ex id pretium gravida. Nam fringilla vehicula scelerisque. Donec et luctus nibh. Suspendisse interdum est vitae urna egestas, vitae aliquet dolor mollis. In id elit ut turpis egestas hendrerit. Integer id tortor leo. Nam a varius dolor, vitae auctor massa. Quisque rhoncus sagittis lobortis. Donec viverra justo ac tristique condimentum. Vestibulum nec hendrerit ex. Curabitur eget tellus ipsum. Aenean finibus mauris non arcu aliquam, at placerat lacus malesuada.",
    "Je suis anglais 3 ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae libero ex. Cras a volutpat ex. Nulla facilisi. Curabitur molestie mauris vel libero lobortis, ut sodales tellus lacinia. Donec in ultricies mi, vitae lacinia nibh. Curabitur ante sem, laoreet aliquet vulputate sit amet, laoreet id tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras eget augue et nisi ornare ultrices et quis augue. Etiam vel porttitor ipsum. Donec lacinia ligula vitae bibendum imperdiet. Praesent sit amet condimentum nibh. Nunc metus felis, rhoncus eu commodo sit amet, sagittis ut augue. Pellentesque elementum lectus eu quam posuere euismod."];

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
        // General 
        button: "English",
        slogan: "Récoltez, construisez et combattez !",
        accueil:"Accueil",
        histoire:"Histoire du jeu",
        a_propos:"A propos",
        manuel:"Manuel",
        installer:"Installer",
        contact:"Nous contacter",
        histoire_page:"Histoire du jeu",
        big_installer:"INSTALLEZ MOI !",
        //Page d'accueil (ceux pas encore la)
        trailer:"Je suis le trailer",
        slide1:"Slide 1 ",
        slide2:"Slide 2 ",
        slide3:"Slide 3",
        titre_slide1:"Titre 1",
        titre_slide2:"Titre 2",
        titre_slide3:"Titre 3",
        // Page histoire
        histoire1:"Il était une fois, dans une contrée lointaine, très lointaine, un jeune homme fatigué de vivre au XXIe siècle, où pollution et nuisances sonores rythmaient son quotidien. En tant qu’adolescent, il avait besoin de liberté et de se reconnecter avec la nature. Un jour, alors qu’il allait chercher son repas dans une boulangerie proche de son école, il tomba sur un panneau publicitaire proposant des vacances déconnectées du monde extérieur, dans sa propre ville, et à petit prix !",
        histoire2:"Craignant que l’occasion ne se représente plus, et dans l’élan d’un choix impulsif, il décida de ne pas retourner en cours cet après-midi-là pour profiter de cette promesse de liberté.",
        histoire3:"Après avoir pris différents trams, notre héros arriva enfin au lieu tant espéré. De grands immeubles aux briques ocres se dressaient devant lui, mais la destination souhaitée se trouvait entre ces deux colosses rouges. Même s’il était midi passé, cette rue n’était éclairée que par les minces reflets des vitres d’en face, si faibles qu’on ne voyait même pas le bout de la ruelle.",
        histoire4:"Notre héros avait la boule au ventre et songea à rebrousser chemin, mais le désir d’une vie meilleure apaisa ses craintes, et il s’avança dans la rue à pas de loup. À peine avait-il parcouru une dizaine de mètres qu’il sentit une présence derrière lui. Mais avant même d’avoir le temps de se retourner, il perdit connaissance…",
        histoire5:"Cette perte de conscience ne sembla durer qu’une seconde, mais à son réveil, il se retrouva dans un endroit totalement différent, où macadam et immeubles avaient laissé place aux prairies et aux sapins géants.",
        histoire6:"Même si cet endroit lui semblait familier, il ne ressemblait plus du tout au monde réel, mais plutôt à un mélange de ses jeux favoris, ceux auxquels il passait tant d’heures, jusqu’à en altérer sa perception de la vraie vie.",
        histoire7:"Il finit par s’extraire de cette forêt pour retrouver la lumière. Cependant, en levant les yeux, pas de soleil, ni de nuages… pourtant, tout faisait penser qu’il était midi. Seul un texte en relief trônait dans le ciel : « Satis-Kingdom ».",
        histoire8:"Malgré un flot de questions dans sa tête, un homme âgé courut vers lui, une sorte de télécommande à la main. Et sans qu’il ait eu le temps de s’écarter, l’homme le percuta ; la télécommande tomba au sol, un portail s’ouvrit, et tous deux furent transportés dans un village abandonné.",
        histoire9:"Avec toutes ces informations à digérer, notre héros perdit à nouveau connaissance. Il n’entendit qu’un battement d’ailes, comme si un camion s’envolait. Pourtant, la chaleur qui se dégageait de ce \"trois tonnes\" ne pouvait signifier qu’une chose : un dragon se tenait à côté de lui.",
        histoire10:"À son réveil, l’homme âgé avait disparu. Il ne restait que lui, un village en ruines… et un point d’exclamation flottant devant lui, accompagné de cette inscription : « Sauvez l’oncle ».",
        histoire11:"Notre héros comprit que cet oncle était en effet la seule manière de retourner dans le monde réel.",
        histoire12:"Ainsi, dans un élan de courage et de désespoir, il se mit en route pour commencer son aventure dans le monde fantastique de Satis-Kingdom !",
        nom_team:"L'Equipe 404-Social-Life-Not-Found",
        raph:"Raphael\nCHANCE" ,
        raph1:"Directeur Artistique",
        raph2:"Concepteur Des Personnages",
        trist:"Tristan\nTERMOZ",
        trist1:"Designer D'Interface Utilisateur",
        trist2:"Concepteur De La Carte",
        q_r:"Quentin\nRUHF",
        q_r1:"Chef De Projet",
        q_r2:"Concepteur Des Mécaniques",
        q_s:"Quentin\nSCHNEIDER",
        q_s1:"Concepteur Web",
        q_s2:"Concepteur Narratif",
        alex:"Alexandre\nDUPUIS",
        alex1:"Concepteur Sonore",
        alex2:"",
        progress_game:"Progression de la conception du jeu",
        titre_sfin:"Soutenance Finale", // tout trad pour ctrl+c/v pour anglais
        cont_sfin:"",
        titre_st2:"Deuxième Soutenance Technique",
        cont_st2:"",
        titre_st1:"Première Soutenance Technique",
        cont_st1:"",
        titre_sfonc:"Première Soutenance Fonctionnel",
        cont_sfonc:"",
        titre_deb:"Debut Du Projet",
        cont_deb:""
       

    },
    en: {
        // General
        button: "Français",
        slogan: "Farm, build and fight !",
        accueil:"Home",
        histoire:"Story of the game",
        a_propos:"About us",
        manuel:"Manual",
        installer:"Download",
        contact:"Contact us",
        histoire_page:"Story of the game",
        big_installer:"DOWNLOAD ME !",
        //Page d'accueil (ceux pas encore la)
        trailer:"Je suis le trailer en anglais",
        slide1:"Slide 1 ",
        slide2:"Slide 2 ",
        slide3:"Slide 3",
        titre_slide1:"Titre 1",
        titre_slide2:"Titre 2",
        titre_slide3:"Titre 3",
        // Page histoire
        histoire1:"Once upon a time, in a land far, far away, there lived a young man who had grown tired of life in the 21st century, where pollution and noise dictated the rhythm of his daily routine. As a teenager, he craved freedom and a reconnection with nature. One day, while picking up lunch at a bakery near his school, he stumbled upon an advertisement offering a digital detox vacation right in his own city, and at a low price! ",
        histoire2:"Fearing the opportunity might never come again, and caught in a moment of impulsiveness, he decided not to return to class that afternoon and instead embrace the call of freedom.",
        histoire3:"After taking several trams, our hero finally arrived at the long-awaited destination. Towering ochre-brick buildings loomed before him, but his true goal lay nestled between these two red giants. Although it was well past noon, the narrow street was lit only by the faint reflections from the windows opposite, so faint that he couldn’t even see the end of the alleyway.",
        histoire4:"With a knot in his stomach, he considered turning back. But the hope of a better life softened his fear, and he crept forward, quiet as a mouse. He had barely taken ten steps when he felt a presence behind him and before he could turn around, everything went black…",
        histoire5:"To him, the blackout seemed to last only a second. Yet when he came to, he found himself in a completely different place, where asphalt and skyscrapers had been replaced by meadows and towering pines.",
        histoire6:"Though oddly familiar, the place no longer resembled the real world, but instead felt like a patchwork of his favorite games the ones he spent so much time in, blurring the lines between fantasy and reality.",
        histoire7:"He eventually made his way out of the forest and into the light. But when he looked up, there was no sun, no clouds and yet, it felt like midday. Hovering in the sky was a single embossed message: “Satis-Kingdom.”",
        histoire8:"Before he could process it, an old man came running toward him, holding what looked like a remote control. The boy had no time to move aside the man crashed into him, the device hit the ground, a portal opened, and both were sucked into an abandoned village.",
        histoire9:"Overwhelmed by everything, the boy lost consciousness once more. All he heard was the flapping of wings not like a bird, but like a truck lifting off the ground. And judging by the heat it gave off, there was no doubt: a dragon was standing right next to him.",
        histoire10:"When he came to, the old man was gone. Only he remained, surrounded by the ruins of a village… and a floating exclamation mark before him, with a message that read: “Save the uncle.”",
        histoire11:"Our hero realized that this uncle was his only way back to the real world.",
        histoire12:"And so, in a surge of courage and desperation, he set off to begin his adventure in the fantastical world of Satis-Kingdom!",
        nom_team:"The 404-Social-Life-Not-Found team",
        raph:"Raphael\nCHANCE" ,
        raph1:"Art Director",
        raph2:"Character Designer",
        trist:"Tristan\nTERMOZ",
        trist1:"UI Designer",
        trist2:"Map Designer",
        q_r:"Quentin\nRUHF",
        q_r1:"Project Leader",
        q_r2:"Gameplay Designer",
        q_s:"Quentin\nSCHNEIDER",
        q_s1:"Web Designer",
        q_s2:"Narrative Designer",
        alex:"Alexandre\nDUPUIS",
        alex1:"Sound Designer",
        alex2:"",
        progress_game:"Progression of the game design",
        titre_sfin:"",
        cont_sfin:"",
        titre_st2:"",
        cont_st2:"",
        titre_st1:"",
        cont_st1:"",
        titre_sfonc:"",
        cont_sfonc:"",
        titre_deb:"",
        cont_deb:""
    }
};


// Fonction pour changer la langue
function toggleLanguage() {
    currentLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
    updateContent();
}

function updateContent() {
    const elements = document.querySelectorAll("[data-key]");
    elements.forEach(el => {
        const key = el.getAttribute("data-key");
        el.textContent = translations[currentLanguage][key];
    });

    document.getElementById("language-btn").textContent = translations[currentLanguage].button;
}

updateContent();


window.addEventListener('scroll', () => {
    const lien = document.getElementById('installation_bouton');
  
    if (window.scrollY > 50) {
      lien.classList.add('scroll_installer');
    } else {
      lien.classList.remove('scroll_installer');
    }
  });
  
  