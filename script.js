let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll('.slides img');
    slides.forEach((slide, index) => {
        slide.style.opacity = 0;
    });
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0; // Change to 0 for immediate loop back
    }
    slides[slideIndex].style.opacity = 1;
}

setInterval(showSlides, 3000); // Adjust time interval for quicker transitions

// Adding task functionality
function addTask() {
    const input = document.getElementById('task-input');
    const taskText = input.value.trim();
    if (taskText === '') return;
    
    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="complete-btn">✔</button>
        <button class="delete-btn">✘</button>
    `;
    taskList.appendChild(li);

    input.value = ''; // Clear input field
}

// Mark task as done or delete
document.getElementById('task-list').addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-btn')) {
        e.target.parentElement.remove();
    } else if (e.target.classList.contains('complete-btn')) {
        const task = e.target.parentElement.querySelector('span');
        task.style.textDecoration = 'line-through';
        e.target.style.display = 'none'; // Hide Done button after completion
    }
});
