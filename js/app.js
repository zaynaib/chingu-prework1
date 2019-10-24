//reference text: https://www.sitepoint.com/dom-manipulation-vanilla-javascript-no-jquery/

let families = ["Lato","Roboto","Oswald"];

//variables

//grab users inputs

let fontText = document.getElementById("fontText");
let textSize = document.getElementById("fontSize");

//methods

//Takes text that the user inputs on to the html screen

let changingText = function(){
    let previews = document.querySelectorAll(".changeText");
    previews.forEach(text =>  text.innerHTML = fontText.value)
};

//Changes size of the text 
let changingSize = function(){
    let previews = document.querySelectorAll(".changeText");
    previews.forEach(text => text.style.fontSize = textSize.value + "px" );
}

//event listeners

fontText.addEventListener('keyup',changingText);
textSize.addEventListener('keyup',changingSize);

var makeCard = function(family) {
    return `
<link href="https://fonts.googleapis.com/css?family=${family}&display=swap" rel="stylesheet">
<div class="card">
    <div class ="metaData">
        <p class="fontType">${family}</p>
        <p class="author"></p>    
    </div>
    <p class="changeText" contentEditable style="font-family:${family}">Hi</p>
    

    <button class="add">+</button>

</div>`
}

function render() {
    let container = document.querySelector('.container');
    let html = families.map(makeCard).join("")
    container.innerHTML = html;
}

render();

setTimeout(function() {
    families.push("Lobster");
    render();
}, 3000);