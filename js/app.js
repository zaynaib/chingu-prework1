//reference text: https://www.sitepoint.com/dom-manipulation-vanilla-javascript-no-jquery/

//variables

//grab users inputs

let fontText = document.getElementById("fontText");
let textSize = document.getElementById("fontSize");
let text = document.getElementById("changeText");

//methods

//Takes text that the user inputs on to the html screen

let changingText = function(){
    text.innerHTML = fontText.value;
};

//Changes size of the text 
let changingSize = function(){
    console.log(textSize.value);
    text.style.fontSize = textSize.value + "px";

}

//event listeners

fontText.addEventListener('change',changingText);
textSize.addEventListener('change',changingSize);



