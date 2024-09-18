document.addEventListener('DOMContentLoaded', function() {
    // Slider functionality for the main slider
    const slides = document.querySelectorAll('.slider .slides img');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? '1' : '0';
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    // Automatically change slides every 5 seconds
    setInterval(nextSlide, 5000);

    // Slider functionality for the About section slider
    const aboutSlides = document.querySelectorAll('.about-slider .slides img');
    let aboutIndex = 0;

    function showAboutSlide(index) {
        aboutSlides.forEach((slide, i) => {
            slide.style.opacity = i === index ? '1' : '0';
        });
    }

    function nextAboutSlide() {
        aboutIndex = (aboutIndex + 1) % aboutSlides.length;
        showAboutSlide(aboutIndex);
    }

    function prevAboutSlide() {
        aboutIndex = (aboutIndex - 1 + aboutSlides.length) % aboutSlides.length;
        showAboutSlide(aboutIndex);
    }

    // Automatically change slides every 5 seconds for About section
    setInterval(nextAboutSlide, 5000);

    // To-Do List functionality
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        li.classList.add('task-item');
        li.innerHTML = `
            ${taskText}
            <button class="complete-btn">Done</button>
            <button class="delete-btn">Delete</button>
        `;

        const deleteBtn = li.querySelector('.delete-btn');
        const completeBtn = li.querySelector('.complete-btn');

        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        completeBtn.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        // Add a unique background color to each task
        const colors = ['#eaf4f4', '#f4eaf4', '#eaf4f4', '#f4eaf4'];
        li.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        taskList.appendChild(li);
        taskInput.value = '';
    }

    document.querySelector('button[onclick="addTask()"]').addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
