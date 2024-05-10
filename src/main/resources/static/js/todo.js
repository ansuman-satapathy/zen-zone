document.addEventListener("DOMContentLoaded", function () {
  const todoForm = document.getElementById("todoForm");
  const todosContainer = document.getElementById("todosContainer");

  // Function to fetch all todos and display them
  function fetchAndDisplayTodos() {
    fetch("/todo/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch todos");
        }
        return response.json();
      })
      .then((todos) => {
        if (!Array.isArray(todos)) {
          throw new Error("Todos is not an array");
        }
        todosContainer.innerHTML = "";
        todos.forEach((todo) => {
          const todoElement = createTodoElement(todo);
          todosContainer.appendChild(todoElement);
        });
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
        // Handle the error (e.g., display a message to the user)
      });
  }

  // Function to create todo element
  function createTodoElement(todo) {
    const todoElement = document.createElement("div");
    todoElement.classList.add("todo");
    if (todo.completed) {
      todoElement.classList.add("completed");
    }
    todoElement.innerHTML = `
            <h3>${todo.title}</h3>
            <p>${todo.description}</p>
            <p>Due Date: ${todo.dueDate}</p>
            <p>Priority: ${todo.priority}</p>
            <p>Category: ${todo.category}</p>
            <button class="completeButton" data-id="${todo.id}" ${
      todo.completed ? "disabled" : ""
    }>
           complete
            </button>
            <button class="editButton" data-id="${todo.id}">
            edit </button>
            <button class="deleteButton" data-id="${todo.id}">
            delete
            </button>
        `;
    return todoElement;
  }

  // Function to handle form submission for adding and updating todos
  todoForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const title = document.getElementById("titleInput").value;
    const description = document.getElementById("descriptionInput").value;
    const dueDate = document.getElementById("dueDateInput").value;
    const priority = document.getElementById("priorityInput").value;
    const category = document.getElementById("categoryInput").value;

    const formData = {
      title,
      description,
      dueDate,
      priority,
      category,
    };

    const action = todoForm.getAttribute("data-action");
    let url = "/todo";
    let method = "POST";
    if (action === "update") {
      const todoId = todoForm.getAttribute("data-id");
      url = `/todo/${todoId}`;
      method = "PUT";
    }

    fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((todo) => {
        fetchAndDisplayTodos();
        todoForm.reset();
        todoForm.removeAttribute("data-action");
        document.querySelector('button[type="submit"]').textContent = "Add";
      });
  });

  todosContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("editButton")) {
      const todoId = event.target.dataset.id;
      const todoElement = event.target.closest(".todo");
      const todoTitle = todoElement.querySelector("h3").textContent;
      const todoDescription =
        todoElement.querySelector("p:nth-child(2)").textContent;
      const todoDueDate =
        todoElement.querySelector("p:nth-child(3)").textContent;
      const todoPriority =
        todoElement.querySelector("p:nth-child(4)").textContent;
      const todoCategory =
        todoElement.querySelector("p:nth-child(5)").textContent;

      // Pre-fill form with todo data for editing
      document.getElementById("titleInput").value = todoTitle;
      document.getElementById("descriptionInput").value = todoDescription;
      document.getElementById("dueDateInput").value = todoDueDate;
      document.getElementById("priorityInput").value = todoPriority;
      // document.getElementById("categoryInput").value = todoCategory;

      // Change form submit button to update todo
      todoForm.setAttribute("data-action", "update");
      todoForm.setAttribute("data-id", todoId);
      document.querySelector('button[type="submit"]').textContent = "Update";
    } else if (event.target.classList.contains("completeButton")) {
      const todoId = event.target.dataset.id;
      fetch(`/todo/${todoId}/complete`, {
        method: "POST",
      })
        .then((response) => response.json())
        .then((completedTodo) => {
          fetchAndDisplayTodos();
        });
    } else if (event.target.classList.contains("deleteButton")) {
      const todoId = event.target.dataset.id;
      // Ask for confirmation before deleting
      const isConfirmed = confirm("Are you sure you want to delete this todo?");
      if (isConfirmed) {
        fetch(`/todo/${todoId}`, {
          method: "DELETE",
        }).then((response) => {
          if (response.ok) {
            fetchAndDisplayTodos();
          } else {
            // Handle error
          }
        });
      }
    }
  });

  // Initial fetch and display todos
  fetchAndDisplayTodos();
});
