const taskManagerContainer = document.querySelector(".taskManager");
const confirmElement = document.querySelector(".confirm");
const confirmedBtn = document.querySelector(".confirmed");
const cancelBtn = document.querySelector(".cancel");

// Global variable initialized with an empty array for local storage
const tasks= []

// Event Listener for adding a task
let taskform = document.getElementById("taskForm");
taskform.addEventListener("submit", handleFormSubmit);

// function to handle the form submit event
function handleFormSubmit(event) {
  // prevent default behaviour of submit form
  event.preventDefault();
  const taskInput = document.getElementById("taskInput");
  // trim to print the value without spaces
  const taskValue = taskInput.value.trim();
  if(taskValue!==" ")
  {
    const newTask={
        text:taskValue,
        completed:false
    };
    tasks.push(newTask);
    saveTasks();
    // clear after save
    taskInput.value=" ";
    // render tasks to show them as cards
    renderTasks();

  }
}

// function to save the tasks
function saveTasks(){
    localStorage.setItem(tasks,JSON.stringify(tasks));
}