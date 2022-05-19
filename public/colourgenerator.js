function generateRandomHexColour() {
  // Math.random()*16777215)
  // Multiply a random number (0 - 1) by 16777215 which is decimal number for ffffff (white)
  // Convert this decimal to a string with a parameter that will return a hexadecimal value
  // Use a Math.floor method to make sure we only get integers
  var randomColour = '#' + Math.floor(Math.random()*16777215).toString(16);
 
  // find this class and change the background colour the random hex value above
  document.querySelector(".random-colour").style.backgroundColor = randomColour; 
  
  // find this class and replace the content with the random hex value
  document.querySelector(".random-colour__hex-value").textContent = randomColour;
}

// on window load run the generateRandomHexColour function to ensure
// we have a colour and text hex value to start with.
window.onload = function() {
  generateRandomHexColour();
};