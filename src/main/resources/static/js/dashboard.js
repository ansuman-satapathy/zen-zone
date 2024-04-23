// Theme Switch
var logout = document.getElementById("logout");
icon.onclick = function () {
    document.body.classList.toggle("darkTheme");
    if (document.body.classList.contains("darkTheme")) {
        icon.className = "bx bxs-sun";
    } else{
        icon.className = "bx bxs-moon"
    }
}

// button eventListners
document.getElementById('todo-btn').addEventListener('click', function() {
    window.location.href = '/todo.html'; // Redirect to the todo page
});

document.getElementById('journal-btn').addEventListener('click', function() {
    window.location.href = '/journal.html'; // Redirect to the journal page
});

document.getElementById('habit-btn').addEventListener('click', function() {
    window.location.href = '/habit.html'; // Redirect to the habit tracker page
});

document.getElementById('pomodoro-btn').addEventListener('click', function() {
    window.location.href = '/pomodoro.html'; // Redirect to the pomodoro page
});

document.getElementById('mindfulness-btn').addEventListener('click', function() {
    window.location.href = '/mindfulness.html'; // Redirect to the mindfulness page
});

document.getElementById('exercise-btn').addEventListener('click', function() {
    window.location.href = '/exercise.html'; // Redirect to the exercise page
});


