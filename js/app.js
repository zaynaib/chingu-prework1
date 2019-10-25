/*!  To Do:

- grid to list
- add a click event listner
- remove the fa class and replace it with a square window
- add fa window class
- add class to convert it to a list
- then figure out button
https://github.com/ming-yong/Algorithm-Practice
<i class="fas fa-table"></i>



*/

//Variables

let families=[{name:"Fascinate Inline",author:"Astigmatic"},{name:"Indie Flower",author:"Kimberly Flower"}
                ,{name:"Roboto",author:"Christian Robertson"},{name:"Jomolhari",author:"Christopher J. Fynn"}
                ,{name:"Liu Jian Mao Cao",author:"Liu Zhengjiang"},{name:"Modak",author:"Ek Type"}]



//grab users inputs

let fontText = document.getElementById("fontText");
let textSize = document.getElementById("fontSize");
let darkMode = document.getElementById("dark");
let lightMode = document.getElementById("light");
let undo = document.getElementById("undo");


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
};

let resetText = function(){
    let previews = document.querySelectorAll(".changeText");
    previews.forEach(text => text.innerHTML = "Then came the night of the first falling star." )
}

let darkModeColorChange = function(){    
    console.log("what");
    document.body.classList.add('darkModeBody');
}

let lightModeColorChange = function(){    
    document.body.classList.remove('darkModeBody');
}

//Event Listeners

fontText.addEventListener('keyup',changingText);
textSize.addEventListener('keyup',changingSize);
darkMode.addEventListener('click',darkModeColorChange);
lightMode.addEventListener('click',lightModeColorChange);
undo.addEventListener('click', resetText);


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
    
    <i class="fas fa-plus-circle add"></i>

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
}

render();
/*
setTimeout(function() {
    families.push("Lobster");
    render();
}, 3000);
*/