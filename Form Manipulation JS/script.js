/*2. Form Manipulation with JavaScript

Problem Statement: You are tasked with creating a web page containing a form that allows users to input their information. 
The page should utilize JavaScript to dynamically handle form submissions, store input data in arrays and objects, and modify 
form behavior based on user interaction.

Expected Outcomes:

Successful creation of an HTML form with input fields for name, email, and message.
Proper handling of form submissions using JavaScript to capture user input and store it in an object.
Implementation of form validation to ensure that all required fields are filled before submission.*/

// Task 1: Create an HTML form with input fields for the user's name, email, and message.

// Task 2: Write JavaScript code to handle form submissions and store user input in an object. Display the object in the console.

// Task 3: Implement form validation to ensure that all required fields are filled before submission.


function handleSubmit(event){
    event.preventDefault();
    
    if (event.target.checkValidity() === false) {
        event.target.classList.add('was-validated'); // Adding the was-validated class to trigger the validation styles
    } else {
        const formElements = event.target.elements; // Grabbing all elements (all our form inputs) and save it to a variable
        console.log(formElements)
    
        // Creating an object of all our data:
        const user = {
            name: formElements.name.value,
            email: formElements.email.value,
            phone: formElements.phone.value,
            message: formElements.message.value,
        };
    
        console.log(user);

        event.target.reset(); // Resetting the form
        event.target.classList.remove('was-validated'); // // Removing the validation styles after resetting the form
    }
}