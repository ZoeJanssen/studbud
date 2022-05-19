// code inspiration from (Byron Delpinal, 2022)


// this is the input string which collects user data from the input button
// Get first letter of each Word in a String
// reusable function to get the first letter of each word in a string.
const phraseButton = document.querySelector("#phrase-button");

// this is the output 
const convertToAcronym = (phrase) => {
  if (typeof phrase !== "string") return "";


  // Split a string of the expression into characters and return the first character of each word:
  return phrase
    // an array containing the words in the string.
    .split(/-| /) 

    // iterate over the array and return the first letter of each word.
    .map((word) => word.substring(0, 1))
    
    // join the first characters together
    // join method takes a separator as a parameter
    .join("")
    
    // make the output be upper case letters 
    .toUpperCase();
};

// when clicked the event listener goes to the expression
phraseButton.addEventListener("click", () => {
  const phraseElement = document.querySelector("#phrase");
  const phrase = phraseElement.value || "";
  const acronymResultElement = document.querySelector("#acronym-result");



  // the output of the expression will go into a the p tag from html
  acronymResultElement.innerHTML = convertToAcronym(phrase);

});

