// Set up the page
setColor("#3498db"); // RIVER blue
addParallax(); // Adds parallax on elements
addParticles();

typeText(
    [
        "Quand un homme a faim, mieux vaut lui apprendre à pêcher que de lui donner un poisson. - Confucius",
        "Plutôt que de regarder le poisson d'un oeil d'envie, mieux vaut rentrer chez soi et tisser un filet. - Proverbe Arabe",
        "Le poisson poète est attiré par les vers au bout de la ligne. - G.Faucer"
    ]
);

addBackground();
setToClassCSSProperty("background-up", "background", "url('img/background-up.png') no-repeat 50% 100%");
setToClassCSSProperty("background-up", "background-size", "cover");

setNextPage("../fox/index.html");

// Other stuff