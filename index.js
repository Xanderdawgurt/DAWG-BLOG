let i = 0; 
let headerText = "This is my bleurg";
let speed = 69;
let paraOneText = "Type y or n if you wish to continue, or not"

let paraOne = document.querySelector(".paraOne");
let headerOne = document.querySelector("#headerOne");

function typeWriter(element, content) {
    if (i < content.length) {
        element.textContent += content.charAt(i);
        i++;
        setTimeout(() => typeWriter(element, content), speed);
    }
}

window.addEventListener('load', () => typeWriter(headerOne, headerText));
window.addEventListener('load', () => typeWriter(paraOne, paraOneText));
