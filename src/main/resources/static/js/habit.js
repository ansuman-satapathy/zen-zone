document.addEventListener("DOMContentLoaded", function () {
  const habitForm = document.getElementById("habitForm");
  const habitsContainer = document.getElementById("habitsContainer");
  let editingHabitId = null;

  // Function to fetch all habits and display them
  function fetchAndDisplayHabits() {
    fetch("/habits")
      .then((response) => response.json())
      .then((habits) => {
        habitsContainer.innerHTML = "";
        habits.forEach((habit) => {
          const habitElement = createHabitElement(habit);
          habitsContainer.appendChild(habitElement);
        });
      });
  }

  // Function to create habit element
function createHabitElement(habit) {
  const habitElement = document.createElement("div");
  habitElement.classList.add("habit");

  // Check if the habit is completed and add completed class accordingly
  if (habit.completed) {
      habitElement.classList.add("completed");
  }

  habitElement.innerHTML = `
          <h3>${habit.name}</h3>
          <p>${habit.description}</p>
          <p>Streak Goal: ${habit.streakGoal}</p>
          <button class="completeButton ${habit.completed ? 'completed' : ''}" data-id="${habit.id}">
          complete</button>
          <button class="editButton" data-id="${habit.id}">edit</button>
          <button class="deleteButton" data-id="${habit.id}">delete</button>
      `;
  return habitElement;
}


  // Event delegation for edit, complete, and delete buttons
  habitsContainer.addEventListener("click", function (event) {
    const target = event.target;
    if (target.classList.contains("editButton")) {
      const habitId = target.dataset.id;
      fetch(`/habits/${habitId}`)
        .then((response) => response.json())
        .then((habit) => {
          document.getElementById("habit-name").value = habit.name;
          document.getElementById("habit-description").value =
            habit.description;
          document.getElementById("habit-streak-goal").value = habit.streakGoal;
          editingHabitId = habit.id;
          // Change form action to update mode
          habitForm.setAttribute("data-action", "update");
          document.querySelector('button[type="submit"]').textContent =
            "Update";
        });
    } else if (target.classList.contains("completeButton")) {
      const habitId = target.dataset.id;
      fetch(`/habits/${habitId}/complete`, {
        method: "POST",
      })
        .then((response) => {
          if (response.ok) {
            // Toggle completion status visually
            target.classList.toggle("completed");
            return response.json();
          }
          throw new Error("Failed to toggle habit completion status");
        })
        .then((completedHabit) => {
          fetchAndDisplayHabits();
        })
        .catch((error) => {
          console.error("Error:", error.message);
        });
    } else if (target.classList.contains("deleteButton")) {
      const habitId = target.dataset.id;
      if (confirm("Are you sure you want to delete this habit?")) {
        fetch(`/habits/${habitId}`, {
          method: "DELETE",
        }).then((response) => {
          if (response.ok) {
            fetchAndDisplayHabits();
          } else {
            // Handle error
          }
        });
      }
    }
  });

  // Form submission for adding and updating habits
  habitForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("habit-name").value;
    const description = document.getElementById("habit-description").value;
    const streakGoal = document.getElementById("habit-streak-goal").value;

    const formData = {
      name,
      description,
      streakGoal,
    };

    const action = habitForm.getAttribute("data-action");
    let url = "/habits";
    let method = "POST";
    if (action === "update") {
      url = `/habits/${editingHabitId}`;
      method = "PUT";
    }

    fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Failed to add/update habit");
      })
      .then((habit) => {
        // Logic for updating UI with the updated or new habit
        // Reset form and button text
        habitForm.reset();
        habitForm.removeAttribute("data-action");
        document.querySelector('button[type="submit"]').textContent =
          "Add Habit";
        fetchAndDisplayHabits();
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  });

  // Initial fetch and display habits
  fetchAndDisplayHabits();
});
