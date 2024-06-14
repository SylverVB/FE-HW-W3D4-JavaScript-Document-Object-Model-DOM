/*1. Document Manipulation with JavaScript

Problem Statement:
You are tasked with creating a web page that dynamically updates its content based on user interaction. The page should utilize JavaScript to 
manipulate the document structure and content using arrays and objects.

Expected Outcomes:

Successful creation of an array containing product information.
Proper display of product information on the webpage using JavaScript.
Implementation of an event listener to trigger the display of products upon page load.*/

// Task 1: Create an array containing information about different products, including their names, prices, and descriptions.

let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];


// Task 2: Write a function to display the product information on the webpage dynamically (added a 'Display Product' button that triggers a display of products). 
// For Task 2 to work as intended disable Task 3 that triggers the display of products when the page loads.

function displayProducts() {
    const productContainer = document.getElementById('product-container');
    // productContainer.innerHTML = ''; // Clearing any existing content

    products.forEach(product => {
        // Creating a div element for each product
        const productDiv = document.createElement('div');
        productDiv.className = 'product';

        // Creating and appending the product name
        const productName = document.createElement('h2');
        productName.textContent = product.name;
        productDiv.appendChild(productName);

        // Creating and appending the product price
        const productPrice = document.createElement('p');
        productPrice.textContent = `Price: $${product.price.toFixed(2)}`;
        productDiv.appendChild(productPrice);

        // Creating and appending the product description
        const productDescription = document.createElement('p');
        productDescription.textContent = product.description;
        productDiv.appendChild(productDescription);

        // Appending the product div to the container
        productContainer.appendChild(productDiv);
    });

    removeParagraph();
    removeButton();
}

// --------------- Remove 'No products yet!' paragraph ---------------

// First option to removeParagraph():

function removeParagraph() {
    const div = document.getElementById('dom-manipulation');
    const paragraph = div.querySelector('p'); // Getting the first paragraph
    if (paragraph) {
        div.removeChild(paragraph); // Removing the first paragraph
    }
}

// Second option to removeParagraph():

function removeParagraph() {
    const div = document.getElementById('dom-manipulation');
    const paragraphs = div.querySelectorAll('p');
    if (paragraphs.length > 0) {
        div.removeChild(paragraphs[0]); // Removing the first paragraph
    }
}

// Third option to removeParagraph():

function removeParagraph(){
    const div = document.getElementById('dom-manipulation');
    const paragraphs = document.getElementsByTagName('p'); // Returning an HTMLCollection of all <p> elements in the document
    console.log(paragraphs);
    if (paragraphs.length > 0) {
        div.removeChild(paragraphs[0]); // Removing the first paragraph
    } 
}

// --------------- Remove 'Display Product' button ---------------

// Option 1:

function removeButton() {
    const button = document.querySelector('button[onclick="displayProducts()"]');
    if (button) {
        button.remove(); // Removing the button
    }
}

// Option 2:

function removeButton() {
    const button = document.getElementById('display-products-btn');
    if (button) {
        button.remove(); // Removing the button
    }
}

// Task 3: Implement an event listener to trigger the display of products when the page loads.

document.addEventListener('DOMContentLoaded', displayProducts);