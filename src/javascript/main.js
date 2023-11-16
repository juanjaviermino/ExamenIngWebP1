function validateEmail(event) {
    event.preventDefault(); // Prevent the form from submitting

    var emailInput = document.getElementById('emailInput'); // Get the input field
    var emailValue = emailInput.value; // Get the value of the input field

    // Get the parent .input-container__input div to apply styles
    var inputContainer = emailInput.parentElement;

    // Get the span for error message
    var span = document.querySelector('#emailInputContainer span');

    // Get the icon element
    var icon = document.querySelector('#emailInputContainer .fa-circle-exclamation');

    // Regular expression for basic email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the email value against the pattern
    if (emailPattern.test(emailValue)) {
        // The email address is valid
        icon.style.display = "none";
        span.style.display = "none";
        inputContainer.style.border = "0";
        inputContainer.style.backgroundColor = "transparent";
    } else {
        // The email address is not valid
        icon.style.display = "block";
        span.style.display = "block";
        inputContainer.style.border = "3px solid #fa5959"; // Example red color
        inputContainer.style.backgroundColor = "#fa5959";
    }
}

  
// Bind the validateEmail function to the form's submit event
var form = document.getElementById('emailForm');
form.addEventListener('submit', validateEmail);

function toggleMenu(event) {

    if (window.innerWidth >= 700) {
        return; // Exit the function early if the screen is too wide
    }

    var logoNormal = document.getElementById('logoNormal');
    var burgerMenu = document.getElementById('burgermenu');
    var floatingMenu = document.getElementById('floatingmenu');
  
    // Check if the click event comes from the burger menu
    if (event.currentTarget.id === 'burgermenu') {
        // Apply flex-column styles to the floating menu
        floatingMenu.style.display = 'flex';
        floatingMenu.style.flexDirection = 'column';
        floatingMenu.style.justifyContent = 'start';
        floatingMenu.style.alignItems = 'center';
    
        // Hide the burger menu and the normal logo
        burgerMenu.style.display = 'none';
        logoNormal.style.display = 'none';
    }
    // Check if the click event comes from the close menu
    else if (event.currentTarget.id === 'closeMenu') {
        floatingMenu.style.display = 'none';
    
        // Show the burger menu and the normal logo
        burgerMenu.style.display = 'block';
        logoNormal.style.display = 'block';
    }
}
  

  