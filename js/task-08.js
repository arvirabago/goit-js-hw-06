// Get the DOM element with the class 'login-form' and store it in the formEl variable
const formEl = document.querySelector(".login-form");

// Function to handle form submission and perform validation
function checkSubmit(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Destructure the 'elements' property of the form and get references to the 'email' and 'password' input elements
  const { elements: { email, password } } = event.currentTarget;

  // Check if either the email or password is empty
  if (email.value === "" || password.value === "") {
    // If empty, show an alert and exit the function
    return alert("Please fill in all fields");
  }

  // If both fields are filled, create an object 'result' with email and password values
  const result = { email: email.value, password: password.value };

  // Log the result to the console
  console.log(result);

  // Reset the form to clear input values
  event.currentTarget.reset();
}

// Add an event listener for the 'submit' event on the form, calling the checkSubmit function
formEl.addEventListener("submit", checkSubmit);
