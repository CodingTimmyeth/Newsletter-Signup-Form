// DOM Variables from HTML
const button = document.querySelector('button')
const dismiss = document.querySelector('#dismiss')
const main = document.querySelector('main')
const successPage = document.querySelector('#successPage')
const invalidMessage = document.getElementById('invalid-message')

// Event Listeners for subscribing 
button.addEventListener('click', function (e) {
    // When clicked do not refresh the page
    e.preventDefault();

    // Pulling the users input when button is clicked
    const emailAddress = document.getElementById('email').value
    // Initalizing Variables for callback functions
    const valid = validateEmail(emailAddress)
    const message = success(valid)
})

// Event Listeners for the Dismiss success message
dismiss.addEventListener('click', () => {
    // Remove and add classlists to show main and hide the successPage
    main.classList.remove('hide')
    successPage.classList.add('hide')
    // Resets the form to have empty inputs
    document.querySelector('form').reset()
})

// Function to validate user's input with a parameter of email that we will be passing
function validateEmail(email) {
    // Pulling the input from HTML
    const emailAddress = document.getElementById('email')
    // Regular Expression to check if user's email passes the requirements
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    // Conditional to check if email matches the regular expression's requirements
    if (email.match(regex)) {
        // If ture, hide the invalidMessage and remove the class "error"
        invalidMessage.classList.add('hide')
        emailAddress.classList.remove('error')
        // Return true as well
        return true
    }

    // Show the invalidMessage and add the class "error" to use the user's error
    invalidMessage.classList.remove('hide')
    emailAddress.classList.add('error')
    // Return false as well
    return false;
}

// Declaring a function called success with one parameter of valid
function success(valid) {
    // Conditional to check if valid is NOT true
    if (!valid) {
        // Return false if false
        return false
    }

    // Add a class to main to hide it and show the successPage to the user
    main.classList.add('hide')
    successPage.classList.remove('hide')
    // Return true
    return true
}

