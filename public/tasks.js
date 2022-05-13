// read from local storage


// Javascript for the task list

// document.getElementById('open').addEventListener("click", function() {
// 	document.querySelector('.bg-modal').style.display = "flex";
// });

// document.querySelector('.close').addEventListener("click", function() {
// 	document.querySelector('.bg-modal').style.display = "none";
// });


const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button")
var taskInput = document.getElementById("taskInput");
var taskList = document.getElementById("taskList");
var dueDateInput = document.getElementById("dueDateInput");
var completionTimeInput = document.getElementById("completionTimeInput");
var estimatedTimeInput = document.getElementById("estimatedTimeInput");
var priorityInput = document.getElementById("priorityInput");


button.addEventListener("click", function(event){
  event.preventDefault();
  let task = taskInput.value;
  let dueDate = dueDateInput.value;
  let completionTime = completionTimeInput.value;
  let estimatedTime = estimatedTimeInput.value;
let priorityRating = priorityInput.options[priorityInput.selectedIndex].value;

  
  
  addTask(task, dueDate, estimatedTime, priorityRating, completionTime, false);
  console.log(taskList);
})

var taskListArray = [];

function addTask(taskDescription, dueDate, estimatedTime, priorityRating, completionTime, completionStatus) {
  let d = new Date();
  let dateCreated = d.getFullYear();
  
  
  // Create the task object
  let task = {
    id: Date.now(),
    taskDescription,
    dueDate,
    dateCreated,
    estimatedTime,
    completionTime,
    priorityRating,
    estimatedTime,
    completionStatus
 
  };

  // Push task object to taskList array
taskListArray.push(task);
renderTask(task);
}

function renderTask(task) {

  updateEmpty();
  // create HTML elements
  let item = document.createElement("li");
  item.setAttribute('data-id', task.id);
  item.innerHTML = "<p>" + task.taskDescription + "</p>"; 

  tasklist.appendChild(item);
  
  
  // extra task DOM elements

  let delButton =  document.createElement("button");
  let delButtonText = document.createTextNode("Delete Task");
  delButton.appendChild(delButtonText);
  item.appendChild(delButton);
  
  
  // event listeners for DOM elements
  
  delButton.addEventListener("click", function(event){
    event.preventDefault();
    let id = event.target.parentElement.getAttribute('data-id');
    let index = taskListArray.findIndex(task=> task.id === Number(id));

    removeItemFromArray(taskListArray, index)
    updateEmpty();
    item.remove();
    
    
  })
  
  // clear the input form 
  form.reset();
}

function removeItemFromArray(arr, index){
if (index > -1) {
  arr.splice(index, 1)
}  
  return arr;
}

function updateEmpty(){
  if (taskListArray.length > 0){
document.getElementById('emptylist').style.display = 'none';
  } else {
document.getElementById('emptylist').style.display = 'block';
  }
  }

// end of javascript for task list
