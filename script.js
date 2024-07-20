//* Overview
//You are tasked with developing a To-Do List application that allows users to add tasks, display them, and remove tasks. This application will utilize advanced DOM manipulation techniques.

//Todo: Setup Event Listener for Page Load
document.addEventListener("DOMContentLoaded", function () {
    
    //Todo: Select DOM Elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");


    //Todo: Create the addTask Function
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Enter a task!")
            return;
        }

        //Todo: Task Creation and Removal
        const listElement = document.createElement('li');
        listElement.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';
        removeButton.onclick = () => {
            taskList.removeChild(listElement);
        };

        listElement.appendChild(removeButton);
        taskList.appendChild(listElement);

        taskInput.value = '';
    }

    //Todo: Attach Event Listeners
    addButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", (event) => {
        if (event.key == "Enter") {
            addTask();
        }
    })

})