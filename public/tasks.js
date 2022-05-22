////////////////////////////////////////
// This code runs in global scope. It gets executed when the <script> tag in the HTML is loaded.
////////////////////////////////////////

// Bind an event to the submit button to capture information from the form and store it into localStorage.
let subButton = document.getElementById("itemsubmit");

// Render the items from local storage so the page appears correct when it loads.
renderItems();

// The event listener gets bound to the submit button and the contents of the internal function are run when the button is clicked.
subButton.addEventListener("click", function() {

  // Start by getting the form values.
  let itemName = document.getElementById("itemname").value;
        let taskDate = document.getElementById('taskdate').value;
  
    taskDate = (new Date(taskDate)).toLocaleDateString('en-GB');
  
       let taskCompletion = document.getElementById('taskcompletion').value;
        let taskEstimate = document.getElementById('taskestimate').value;
        let taskPriority = document.getElementById('taskpriority').value;

  // Make a JS object to contain the data we want to write into local storage for each item. This is nice because we can have one key:value pair as we do here, or 50.
  let itemObj = {
    'itemName': itemName,
    'taskDate': taskDate,
    'taskCompletion': taskCompletion,
    'taskEstimate': taskEstimate,
    'taskPriority': taskPriority
  };

  // Get the item list from localStorage. This uses a custom function, since we need to do this action in a few different places. See that function for deets of how it works.
  let existingItems = getItems();

  // Add the new item onto the end of the list.
  existingItems.push(itemObj);

  // Local storage can only store strings, while we want to store an array. To get around this, we use JSON.stringify (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).
  existingItems = JSON.stringify(existingItems);

  // And finally we write the JSON string into local storage.
  localStorage.setItem('items', existingItems);

  // Render the items using our custom function.
  renderItems();
});

////////////////////////////////////////
// Now we have some custom functions to handle tasks we have to do in order to make all this work.
////////////////////////////////////////

// getItems should be fairly self explanatory. It gets items from local storage!
function getItems() {
  // Check to see if we have any item items in local storage already
  let items = localStorage.getItem('items');

  // If the value of the items variable is `null` then we have not created or used localStorage yet. If this is true, we create an empty array and return that to the code that ran getItems(). 
  if (items == null) {
    return [];
  }

  // If we are still here, then we do have items in the list, or the list is empty.
  // Either way, we convert that information back into an array using JSON.parse (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse), this is the opposite action to JSON.stringify.
  items = JSON.parse(items);

  // Return the list of items back to the code that ran this function.
  return items;
}

// Render the items to the screen using the DOM manipulation methods.
function renderItems() {
  // Use our custom getItems() function to retrieve info from local storage.
  let items = getItems();
  // Find the UL element within the #itemlist DIV.
  let itemUl = document.querySelector('#itemlist ul');

  // Clear the contents of the UL to rebuild it fresh.
  itemUl.innerHTML = ""; // <-- this is the one time I'm okay with you using innerHTML. Otherwise build the DOM elements properly and don't concatenate strings :)

  // forEach is like a shorthand for() loop. It runs the internal function once per item in the array.
  items.forEach(function(item) {

    // Create a li DOM element to hold each item

    let itemLi = document.createElement('li');

    // makes the list be draggable
     itemLi.setAttribute('draggable', 'true');
   itemLi.setAttribute('ondragstart', 'drag(event)');
    
    // Now we could just set innerText or innerHTML to hold the item name, but if we want to have more than one variable displayed, this gets messy fast. Don't do this, it's poor practice and the code ends up clumsy and hard to maintain.
    // itemLi.innerHTML = "<strong>" + item.itemName + "</strong>";

    // Instead we create more elements to separate things using proper markup.

    // Create a span element to hold the name of the item.
    let itemName = document.createElement('span');
    itemName.setAttribute('class', 'itemname'); // We can set classes so CSS can target it nicely later.
    itemName.innerText = item.itemName; // And we just put the text into this span, and nothing else.
    

    let taskDate = document.createElement('span');
    taskDate.setAttribute('class', 'taskdate');
    taskDate.innerText = item.taskDate; 

     let taskCompletion = document.createElement('span');
    taskCompletion.setAttribute('class', 'taskcompletion');
    taskCompletion.innerText = item.taskCompletion; 

    let taskEstimate = document.createElement('span');
    taskEstimate.setAttribute('class', 'taskestimate');
    taskEstimate.innerText = item.taskEstimate; 

let taskPriority = document.createElement('span');
    taskPriority.setAttribute('class', 'taskPriority');
    taskPriority.innerText = item.taskPriority; 
 
    // Add an element to represent the remove button
    let itemRemove = document.createElement('button');
    itemRemove.setAttribute('class', 'remove');
    itemRemove.innerText = 'x'; // You can CSS this later to be pretty

    // Add an event handler to the remove button. To make this work properly we need to do two things. Remove the DOM element from the document _AND_ remove the correct item from the local storage list.
    itemRemove.addEventListener("click", function() {
      // This allows us to remove the list li element directly which takes care of the visual removal.
      itemLi.remove();

      // And the custom removeItem function helps us to remove it from local storage.
      removeItem(item.itemName);
            // removeItem(item.taskDate);

    });

    // Add the name and remove button to the li
itemLi.appendChild(itemName);
itemLi.appendChild(taskDate);
itemLi.appendChild(taskCompletion); 
    itemLi.appendChild(taskEstimate); 
    itemLi.appendChild(taskPriority);  itemLi.appendChild(itemRemove);

    // Add the li to the ul.
    itemUl.appendChild(itemLi);

  });
}

// Removes a specific item, by name from local storage.
function removeItem(itemName) {
  // Use our custom getItems() function to retrieve info from local storage. Since we need to do this in a few places, see how the custom function is more efficient?
  let items = getItems();

  // This helps us to find the array index for the item that we want to remove. It compares the information we pass in (via the itemName variable) to the information in the objects within the array. If it matches, we get a number back - i.e. items[3].
  let itemIndex = items.findIndex(function(item) {
    return item.itemName == itemName;
        // return item.taskDate == taskDate;

  });

  // We've talked about splice() in class before (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice), it removes a specific item out of the array 
  items.splice(itemIndex, 1);

  // Now we do the same process of writing information back into local storage that we did earlier.
  items = JSON.stringify(items);
  localStorage.setItem('items', items);
}




   function drag(ev) {
            ev.dataTransfer.setData("text", ev.target.id);
        }

        function allowDrop(ev) {
            ev.preventDefault();
        }

        function drop(ev) {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            ev.target.appendChild(document.getElementById(data));
        }