
//Variables

let families=[{name:"Fascinate Inline",author:"Astigmatic"},{name:"Indie Flower",author:"Kimberly Flower"}
                ,{name:"Roboto",author:"Christian Robertson"},{name:"Jomolhari",author:"Christopher J. Fynn"}
                ,{name:"Liu Jian Mao Cao",author:"Liu Zhengjiang"},{name:"Modak",author:"Ek Type"}]

//grab users inputs

let fontText = document.getElementById("fontText");
let textSize = document.getElementById("fontSize");

//Methods

//Takes what the user types in and puts it onto the webpage
let changingText = function(){

    //grab all of the paragraph elements that have the class changeText
    let previews = document.querySelectorAll(".changeText");

    //loop through each of the elements and uses an anonymous function to change the value to the user input value
    previews.forEach(text =>  text.innerHTML = fontText.value);
};

//Changes size of the text 
let changingSize = function(){
    //grab all of the paragraph elements that have the class changeText
    let previews = document.querySelectorAll(".changeText");
    //loop through each of the elements and uses an anonymous function to change the font size based on the user input.
    previews.forEach(text => text.style.fontSize = textSize.value + "px" );
}

//Event Listeners

fontText.addEventListener('keyup',changingText);
textSize.addEventListener('keyup',changingSize);

//generates a  html template based on the metadata from google fonts
let makeCard = function(family) {
    return `
<link href="https://fonts.googleapis.com/css?family=${family.name}&display=swap" rel="stylesheet">
<div class="card">
    <div class ="metaData">
        <p class="fontType">${family.name}</p>
        <p class="author">${family.author}</p>    
    </div>
    <p class="changeText" contentEditable style="font-family:${family.name}">Then came the night of the first falling star.</p>
    

    <button class="add">+</button>

</div>`
};

//render function creates a google font card inside the div with the container class/
function render() {
    //select the container class
    let container = document.querySelector('.container');

    //creates a new array and calls MakeCard function on each element
    //joins each of the cards together
    let html = families.map(makeCard).join("");
    container.innerHTML = html;
    console.log(html)
}

render();
/*
setTimeout(function() {
    families.push("Lobster");
    render();
}, 3000);
*/