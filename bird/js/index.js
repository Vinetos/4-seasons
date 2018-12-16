// Set up the page
setColor("#2ecc71"); // EMERALD green
addParallax(); // Adds parallax on elements
addParticles();

typeText(
    [
        "L'âme a des illusions comme l'oiseau a des ailes ; c'est ce qui la soutient. - V. Hugo",
        "Chaque oiseau vole avec les oiseaux de son espèce. - Mahomet",
        "L'âme est le seul oiseau qui soutienne sa cage. - V. Hugo"
    ]
);

addBackground();

// Places the pupils of the bird
setPupilsPos();

setNextPage("../fish/index.html");
// Eyes animation
setInterval(closeEyes, 7000); // Call closeEyes() each 7s (7000 ms)

/////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                         //
//                                        FUNCTIONS                                        //
//                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////

// Close eyes and call openEyes
function closeEyes() {
    setTimeout(function() { // Called after [ 0 ; 3000 ] ms
        document.getElementById("eye-r").style["opacity"] = "0"; // Set the opacity to 0 (invisible)
        document.getElementById("eye-l").style["opacity"] = "0";
        openEyes();
    }, random(0, 3000)); // gets a random between 0 and 3 (in ms)
}

// Just open eyes (just kidding)
function openEyes() {
    setTimeout(function() { // Called after [ 0 ; 100 ] ms
        document.getElementById("eye-r").style["opacity"] = "1"; // Set the opacity to 1 (visible)
        document.getElementById("eye-l").style["opacity"] = "1";
    }, random(0, 100)); // gets a random between 0 and 100 (in ms)
}

// Pupils position (x only)
function setPupilsPos() {
    // TODO Change to the good value ? (Check compatibility with other browser)
    document.getElementById("pupil-r").style["left"] = "49.15%";
    document.getElementById("pupil-l").style["left"] = "50.85%";
}

// Generates a random int between min and max included
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}