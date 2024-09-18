// Slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');

function showNextSlide() {
    // Hide the current slide
    slides[currentSlide].style.display = 'none';

    // Move to the next slide (or go back to the first if it's the last slide)
    currentSlide = (currentSlide + 1) % slides.length;

    // Show the next slide
    slides[currentSlide].style.display = 'block';
}

// Set the interval to change the slide every 3 seconds
setInterval(showNextSlide, 3000);


// To-Do List functionality
function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById('task-list');

        const listItem = document.createElement('li');
        listItem.textContent = taskText;

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
