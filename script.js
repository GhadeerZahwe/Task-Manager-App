const taskManagerContainer = document.querySelector(".taskManager");
const confirmElement= document.querySelector(".confirm");
const confirmedBtn= document.querySelector(".confirmed");
const cancelBtn= document.querySelector(".cancel");

// Event Listener for adding a task
let taskform= document.getElementById("taskForm");
taskform.addEventListener("submit",handleFormSubmit)