
//methods

//Takes text that the user inputs on to the html screen;

let changingText = function(){
    let text = document.getElementById("changeText");
    text.innerHTML = fontText.value;
};

//event listeners

//grab fonttext id
let fontText = document.getElementById("fontText");

fontText.addEventListener('change',changingText
);

//change the dom to reflect changetext id div