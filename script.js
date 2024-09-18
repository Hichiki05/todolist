function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        const taskList = document.getElementById('task-list');
        
        const listItem = document.createElement('li');
        listItem.classList.add('task-item');
        
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        listItem.appendChild(taskSpan);
        
        const doneButton = document.createElement('button');
        doneButton.textContent = 'Done';
        doneButton.classList.add('done-btn');
        doneButton.onclick = function() {
            taskSpan.classList.toggle('done'); // Toggle strike-through style
        };
        listItem.appendChild(doneButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.onclick = function() {
            taskList.removeChild(listItem);
        };
        listItem.appendChild(deleteButton);

        taskList.appendChild(listItem);

        taskInput.value = "";
    }
}

// Optional: Add event listener to call addTask function when pressing Enter key
document.getElementById('task-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default action of the Enter key (form submission)
        addTask();
    }
});
