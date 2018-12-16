const commonsFiles = {
    "jquery-1.11.1": function () {
        loadCommonJS("preloader", false);
        commonsFiles["typed"] = function () {
            loadJS("js/index");
        };
        loadCommonJS("typed")
    },
    "particles": undefined,
    "nanobar": function () {
        simpleBar = new Nanobar();
        simpleBar.go(100);
    },
    "parallax": undefined
};
const defaultTime = 1000;// 10s (in cs (ms / 10))
let timeLeft = defaultTime;
let simpleBar;
let schedulerId;
let locHref = "";

// Loads all JS files
for (let file in commonsFiles) {
    loadCommonJS(file);
}

// Event when a js file is loaded
document.addEventListener("load", function (event) {
    if (event.target.nodeName === "SCRIPT") {
        let src = event.target.getAttribute("src");
        console.log("Script loaded: " + src);
        src = src.replace("js/", "").replace("../common/", "").replace("libs/", "").replace(".js", "").replace(".min", "");
        commonsFiles[src] && commonsFiles[src]();
    }
}, true);

// Adds Parallax Effect
function addParallax() {
    let scene = document.getElementById('scene');
    let parallax = new Parallax(scene);
}

// Loads particles properties
function addParticles() {
    particlesJS.load('particles-js', 'js/particlesjs-config.json', function () {
    });
}

function addBackground() {
    setToClassCSSProperty("background", "background", "url('img/background.jpg') no-repeat 50% 100%");
    setToClassCSSProperty("background", "background-size", "cover");
}

// Update CSS of class
function setToClassCSSProperty(clazz, property, value) {
    for (let e of document.getElementsByClassName(clazz)) {
        e.style[property] = value;
    }
}

function setToIdCSSProperty(id, property, value) {
    document.getElementById(id).style[property] = value;
}

// Change color of element
function setColor(color) {
    setToIdCSSProperty("status", "border-top", "4px solid" + color);
    setToClassCSSProperty("bar", "background", color)
}
// Creates Typed text animation !
function typeText(text) {
    jQuery("#typed").typed({
        strings: text,
        typeSpeed: 50,
        backDelay: 1000,
        callback: function () {
            jQuery(".typed-cursor").remove();
            schedulerId = setInterval(decreaseTime, 10);
        }
    });
}

function decreaseTime() {
    if (timeLeft > 0) {
        let percent = timeLeft * 100 / defaultTime;
        simpleBar.go(100 - percent);
        timeLeft--;
    } else {
        simpleBar.go(100);
        clearInterval(schedulerId);
        document.location.href = locHref;
    }
}

function setNextPage(nextPage) {
    locHref = nextPage;
}

// Load a common js file
function loadCommonJS(file, isLib = true) {
    loadJS("../common/" + (isLib ? "libs" : "js") + "/" + file + (isLib ? ".min" : ""));
}

// Load a js file
function loadJS(file) {
    console.log("Loading script: " + file);
    let jsElm = document.createElement("script");
    // set the type attribute and make the script element load file
    // jsElm.type = "application/javascript";
    jsElm.src = file + ".js";

    // Insert the element to the body element in order to load the script
    document.body.appendChild(jsElm);
}