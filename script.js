let slidesIndex = 1;
if (!sessionStorage.getItem("premiereVisite"))
{
    sessionStorage.setItem("language","fr");
    sessionStorage.setItem("premiereVisite","true")
}

let currentLanguage = sessionStorage.getItem("language");

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
        // page a propos
        a_propos_titre:"A propos de nous",
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
        alex2:"Programmeur IA ",
        progress_game:"Progression de la conception du jeu",
        titre_sfin:"Soutenance Finale", // tout trad pour ctrl+c/v pour anglais
        cont_sfin:"",
        titre_st2:"Deuxième Soutenance Technique",
        cont_st2:"La grande majorité des implémentations des mécaniques du jeu ont été effectué. Il reste cependant des petits trucs à droits à gauche comme les quêtes que doit suivre le joueur afin de rendre le jeu pleinement jouable. Quand au site on a quelque chose de très statique mais qui a pour objectif d'être plus attrayant pour la suite.",
        titre_st1:"Première Soutenance Technique",
        cont_st1:"Pour cette première soutenance, nous devions avoir commencé à coder. Ainsi, le jeu disposait de ses premières mécaniques, notamment les mouvements du joueur ; cependant, il n’y avait encore aucune attaque ni aucun asset implémenté pour notre joueur. La carte en était encore à ses débuts, avec la présence du village, mais sans aucune autre zone du jeu. Tous les éléments extérieurs à la programmation étaient prêts à être implémentés, comme les assets, l’histoire et la musique du jeu.\nLe site web avait sa première structure, mais restait très éloigné, visuellement, de ce qu’il est aujourd’hui, avec un site statique sans identité visuelle.",
        titre_sfonc:"Première Soutenance Fonctionnel",
        cont_sfonc:"Dans l’objectif de nous organiser afin que notre projet se déroule au mieux, nous avons réparti les différentes tâches entre les membres de notre équipe, comme indiqué dans le tableau ci-dessous.\nÉtant donné qu’à cette période nous ne pouvions pas encore coder, la grande majorité de notre travail consistait à préparer la phase de codage du second semestre.\nEn effet, durant cette période, nous avons commencé à créer les assets, écrire l’histoire, développer l’ambiance sonore du jeu, réfléchir au gameplay souhaité ainsi qu’aux quêtes, et surtout apprendre les bases de Unity, car un seul membre de l’équipe l’avait déjà utilisé auparavant.",
        titre_deb:"Debut Du Projet",
        cont_deb:"Lors de la création des groupes, chaque membre de l’équipe cherchait des personnes ambitieuses afin de pouvoir donner le meilleur de soi-même dans ce projet de S2.\nAu début de l’année scolaire 2024, les jeux auxquels notre équipe jouait principalement étaient Satisfactory (1) et Stardew Valley (2) : deux jeux en apparence totalement opposés, mais qui partageaient le même objectif, se détendre en jouant.\nLe premier demandait beaucoup de réflexion dans la logistique de sa construction par-dessus la nature, tandis que le second était plus relaxant, plaçant le joueur au cœur de la nature sans l’abîmer.\nNotre équipe a donc compris que ce qui rend un jeu satisfaisant à jouer, c’est la construction de bâtiments, l’exploration, et la présence de la nature, tout en restant simple à comprendre.\nC’est ainsi qu’est né le projet Satis-Kingdom : un jeu où il faut construire des éléments tout en explorant des environnements naturels, avec une prise en main facile.\nCe fil conducteur sera celui qui nous guidera jusqu’au bout de ce projet.",
        // page installer 
        installer_titre:"Installer Satis-Kingdom",
        telecharger_rap:"Cahier des charges, rapports et plans de soutenance",
        rap1:"Cahier Des Charges",
        rap2:"Rapport Technique 1",
        rap3:"Plan Soutenance Technique 1",
        rap4:"Rapport Technique 2",
        rap5:"Plan Soutenance Technique 2",
        rap6:"Rapport Final",
        rap7:"Plan Soutenance Final",
        rap8:"Sites Et Logiciels Utilisés",
        // contact
        contact_title:"Nous contacter",
        mail_contact:"Contactez nous par mail ou sur discord !"
        
       

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
        // page a propos
        a_propos_titre:"About us",
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
        alex2:"AI Programmer",
        progress_game:"Progression of the game design",
        titre_sfin:"",
        cont_sfin:"",
        titre_st2:"",
        cont_st2:"",
        titre_st1:"",
        cont_st1:"For this first presentation, we were expected to have started coding. The game had its first mechanics, including player movement; however, there were still no attacks or assets implemented for our player. The map was still in its early stages, with only the village present and no other game zones yet. All elements external to programming were ready to be implemented, such as the assets, the story, and the game’s music.\nThe website had its initial structure, but was still far from what it is today in terms of visuals — it was a static site with no visual identity.",
        titre_sfonc:"",
        cont_sfonc:"In order to organize ourselves so that our project would run as smoothly as possible, we assigned the different tasks to each member of our team, as shown in the table below.\nAt that time, since we were not yet able to start coding, most of our work was focused on preparing for the development phase in the second semester.\nDuring this period, we started creating assets, writing the story, developing the game's sound atmosphere, thinking about the gameplay we wanted, as well as the quests and above all, learning the basics of Unity, since only one of the five team members had used it before.",
        titre_deb:"",
        cont_deb:"When the groups were being formed, each team member was looking for ambitious people in order to give their best in this S2 project.\nAt the start of the 2024 school year, the games our team played the most were Satisfactory (1) and Stardew Valley (2), two games that seem completely opposite at first glance, but shared the same goal: to relax while playing.\nThe first required a lot of planning and logistical thinking to build structures on top of nature, while the second was more relaxing, placing the player in harmony with nature without harming it.\nOur team realized that what makes a game satisfying to play is the combination of building, exploration, and the presence of nature, all while keeping things simple to understand.\nThat’s how the Satis-Kingdom project was born: a game where players build while exploring natural environments, with an easy-to-grasp gameplay.\nThis guiding principle will lead us through to the end of the project.",
        // page installer 
        installer_titre: "Install Satis-Kingdom",
        telecharger_rap: "Specifications, reports and soutenances plans",
        rap1: "Technical Specifications",
        rap2: "Technical Report 1",
        rap3: "Technical Soutenance Plan 1",
        rap4: "Technical Report 2",
        rap5: "Technical Soutenance Plan 2",
        rap6: "Final Report",
        rap7: "Final Soutenance Plan",
        rap8: "Sites and Software Used",
        // contact
        contact_title: "Contact us",
        mail_contact: "Contact us by mail or on discord!"

    }
};


// Fonction pour changer la langue
function toggleLanguage() {
    if (currentLanguage === "fr") {
        currentLanguage = "en";
        sessionStorage.setItem("language","en");
    }
    else {
        currentLanguage = "fr";
        sessionStorage.setItem("language","fr");
    }
    updateContent();
}

/*
window.addEventListener("load",function() { // si faut faire un trux quand on charge une page
    updateContent;
}) // au final pas utilse comme on appel déjà updateContent mais on sait jamais 
*/
function updateContent() {
    const elements = document.querySelectorAll("[data-key]");
    elements.forEach(el => {
        const key = el.getAttribute("data-key");
        el.textContent = translations[currentLanguage][key];
    });

    document.getElementById("language-btn").textContent = translations[currentLanguage].button;
}

updateContent();


function loadPDF() // pour le pdf en anglais / fr
{
    if (currentLanguage === "fr") {
        window.open("images/test.pdf","_blank")
    }
    else {
        window.open("images/equipe.jpg","_blank")
    }
    
}

window.addEventListener("scroll", () => {
    const lien = document.getElementById("installation_bouton");
  
    if (window.scrollY > 50) {
      lien.classList.add("scroll_installer");
    } else {
      lien.classList.remove("scroll_installer");
    }
  });



  
  