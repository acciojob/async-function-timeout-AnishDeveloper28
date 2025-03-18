// Get form elements
const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const submitButton = document.getElementById("btn");
const outputDiv = document.getElementById("output");

// Function to introduce a delay
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Async function to handle form submission
async function handleSubmit() {
  // Get user inputs
  const text = textInput.value.trim();
  const delayTime = parseInt(delayInput.value.trim());

  // Validate inputs
  if (!text || isNaN(delayTime)) {
    outputDiv.textContent = "Please enter valid text and delay.";
    return;
  }

  // Clear previous output
  outputDiv.textContent = "";

  // Introduce delay
  await delay(delayTime);

  // Display the message
  outputDiv.textContent = text;
}

// Add event listener to the submit button
submitButton.addEventListener("click", handleSubmit);