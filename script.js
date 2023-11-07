
// Object Array for local storage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const taskManagerContainer = document.querySelector(".taskManager");
const confirmElement = document.querySelector(".confirm");
const confirmedBtn = confirmElement.querySelector(".confirmed");
const cancelBtn = confirmElement.querySelector(".cancel");


// Event Listener for adding a task
document.getElementById("taskForm").addEventListener("submit", handleFormSubmit);

// function to handle the form submit event
function handleFormSubmit(event) {
  // prevent default behaviour of submit form
  event.preventDefault();
  const taskInput = document.getElementById("taskInput");
  // trim to print the value without spaces
  const taskValue = taskInput.value.trim();
  if (taskValue !== " ") {
    const newTask = {
      text: taskValue,
      completed: false,
    };
    tasks.push(newTask);
    saveTasks();
    // clear after save
    taskInput.value = " ";
    // render tasks to show them as cards
    renderTasks();
  }
}

// function to save the tasks
function saveTasks() {
  localStorage.setItem(tasks, JSON.stringify(tasks));
}

// Initial rendering of tasks
renderTasks();

// function to render the tasks
function renderTasks(){
    const taskContainer= document.getElementById("taskContainer");
    taskContainer.innerHTML = " ";
    tasks.forEach((task,index) => {
    const taskCard = document.createElement("div");
    taskCard.classList.add("taskCard");
    let classVal = "pending"
    let statusVal="Pending"
    if(task.completed)
    {
        classVal="completed";
        statusVal="Completed";
    }
    taskCard.classList.add(classVal);
     
    const taskText = document.createElement("p");
    taskText.innerText=task.text;

    const taskStatus = document.createElement("p");
    taskStatus.innerText= statusVal;
    taskStatus.classList.add("status");

    taskCard.appendChild(taskText);
    taskCard.appendChild(taskStatus);
    taskContainer.appendChild(taskCard);
  });
}