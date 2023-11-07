// Object Array for local storage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let indexToBeDeleted= null;
const taskManagerContainer = document.querySelector(".taskManager");
const confirmElement = document.querySelector(".confirm");
const confirmedBtn = confirmElement.querySelector(".confirmed");
const cancelBtn = confirmElement.querySelector(".cancel");

// Event Listener for adding a task
document
  .getElementById("taskForm")
  .addEventListener("submit", handleFormSubmit);

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
function renderTasks() {
  const taskContainer = document.getElementById("taskContainer");
  taskContainer.innerHTML = " ";
  tasks.forEach((task, index) => {
    const taskCard = document.createElement("div");
    taskCard.classList.add("taskCard");
    let classVal = "pending";
    let statusVal = "Pending";
    if (task.completed) {
      classVal = "completed";
      statusVal = "Completed";
    }
    taskCard.classList.add(classVal);

    const taskText = document.createElement("p");
    taskText.innerText = task.text;

    const taskStatus = document.createElement("p");
    taskStatus.innerText = statusVal;
    taskStatus.classList.add("status");

    const toggleButton = document.createElement("button");
    toggleButton.classList.add("button-box");
    const btnContentElement = document.createElement("span");
    btnContentElement.innerText = task.completed
      ? "Mark as Pending"
      : "Mark as Completed";
    btnContentElement.classList.add("green");
    toggleButton.appendChild(btnContentElement);
    toggleButton.addEventListener("click", () => {
    tasks[index].completed= !tasks[index].completed;
    saveTasks();
    renderTasks();
    })


    const deleteButton = document.createElement("button");
    deleteButton.classList.add("button-box");
    const delBtnContentElement = document.createElement("span");
    delBtnContentElement.innerText = "Delete";
    delBtnContentElement.classList.add("red");
    deleteButton.appendChild(delBtnContentElement);
    deleteButton.addEventListener("click",() => {
        indexToBeDeleted=index;
        confirmElement.style.display="block";
        taskManagerContainer.classList.add("overlay");
    })

    taskCard.appendChild(taskText);
    taskCard.appendChild(taskStatus);
    taskCard.appendChild(toggleButton);
    taskCard.appendChild(deleteButton);
    taskContainer.appendChild(taskCard);
  });
}

// Confirm Button EventListener
confirmedBtn.addEventListener("click", ()=>{
    confirmElement.style.display="none";
    taskManagerContainer.classList.remove("overlay");
    deleteTask(indexToBeDeleted);
})

// Cancel Button EventListener
cancelBtn.addEventListener("clicl", ()=>{
    confirmElement.style.display="none";
    taskManagerContainer.classList.remove("overlay");
})


// Function to delete task
function deleteTask(index){
    console.log("Delete", index);
}