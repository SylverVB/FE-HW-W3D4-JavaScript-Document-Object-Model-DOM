/*3. Styling with JavaScript

Problem Statement:
You are tasked with creating a web page that demonstrates dynamic styling using JavaScript. The page should include HTML elements that 
change their appearance in response to user actions or events triggered by JavaScript functions.

Task 1: Create an HTML structure with at least 5 elements that will be styled dynamically.

<div id="box" onclick="changeColor()">Click me to change color</div>

Task 2: Write JavaScript code to dynamically change the color of the box element when clicked.

Task 3: Implement additional styling changes based on user interaction, such as mouse hover effects or button clicks on different HTML elements.

Expected Outcomes:

The HTML structure includes an element (e.g., a box) that responds to user interaction.
JavaScript code successfully changes the color of the box element when clicked, providing a visual feedback mechanism.
Additional styling changes, such as mouse hover effects or button clicks, are implemented to enhance user experience and engagement.*/


function changeColor() {
    const box = document.getElementById('box');
    box.style.backgroundColor = 'green';
}

function changeHoverColor(element) {
    element.style.backgroundColor = 'yellow';
}

function resetHoverColor(element) {
    element.style.backgroundColor = 'blue';
}

function clickEffect(element) {
    element.style.backgroundColor = 'lime';
}

function doubleClickEffect(element) {
    element.style.backgroundColor = 'cyan';
}

function contextMenuEffect(element) {
    element.style.backgroundColor = 'magenta';
}

function animateOnce() {
    const button = document.getElementById('animate-button');
    button.classList.add("animationjs");

    setTimeout(() => {
        button.style.backgroundColor = "#A155B9";
        button.classList.remove("animationjs");
    }, 1500);
}

function animateBox(element) {
    element.classList.add("animationjs");

    setTimeout(() => {
        element.classList.remove("animationjs");
    }, 1500);
}