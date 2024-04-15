document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.getElementById('todo-form');
    todoForm.addEventListener('submit', handleTodoFormSubmit);

    fetchTodos();
});

// Function to handle form submission
function handleTodoFormSubmit(event) {
    event.preventDefault();

    const titleInput = document.getElementById('todo-title');
    const descriptionInput = document.getElementById('todo-description');
    const dueDateInput = document.getElementById('todo-due-date');
    const priorityInput = document.getElementById('todo-priority');
    const categoryInput = document.getElementById('todo-category');

    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();
    const dueDate = dueDateInput.value;
    const priority = parseInt(priorityInput.value);
    const category = categoryInput.value.trim();

    if (title && description && dueDate && !isNaN(priority) && category) {
        const todo = {
            title: title,
            description: description,
            dueDate: dueDate,
            priority: priority,
            category: category
        };

        createTodo(todo);

        // Clear input fields after creating todo
        titleInput.value = '';
        descriptionInput.value = '';
        dueDateInput.value = '';
        priorityInput.value = '';
        categoryInput.value = '';
    } else {
        console.error('Please fill out all fields.');
    }
}

// Function to fetch all todos from the API
function fetchTodos() {
    fetch('/todo')
        .then(response => response.json())
        .then(todos => {
            const todoList = document.getElementById('todos');
            todoList.innerHTML = ''; // Clear the existing list
            todos.forEach(todo => {
                const li = createTodoElement(todo);
                todoList.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching todos:', error));
}

// Function to create a new todo
function createTodo(todo) {
    fetch('/todo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    .then(response => response.json())
    .then(createdTodo => {
        const todoList = document.getElementById('todos');

        // Create todo element
        const newTodoElement = createTodoElement(createdTodo);
        if (newTodoElement) {
            todoList.appendChild(newTodoElement); // Append todo element to the list
        }
    })
    .catch(error => console.error('Error creating todo:', error));
}

// Function to create a todo element
function createTodoElement(todo) {
    const li = document.createElement('li');
    li.classList.add('todo-item');
    li.innerHTML = `
        <span class="priority">Priority: ${todo.priority}</span>
        <strong>${todo.title}</strong>
        <p>${todo.description}</p>
        <p>Due Date: ${todo.dueDate}</p>
        <p>Category: ${todo.category}</p>
        <button class="delete-btn">Delete</button>
    `;

    // Add event listener for delete button
    const deleteButton = li.querySelector('.delete-btn');
    deleteButton.addEventListener('click', () => deleteTodo(todo.id));

    return li;
}

// Function to delete a todo
function deleteTodo(id) {
    fetch(`/todo/${id}`, {
        method: 'DELETE'
    })
    .then(() => {
        const todoElement = document.getElementById(`todo-${id}`);
        todoElement.remove();
    })
    .catch(error => console.error('Error deleting todo:', error));
}


// Function to sort todos by due date
function sortTodosByDueDate() {
    fetch(SORT_BY_DUE_DATE_URL)
        .then(response => response.json())
        .then(todos => {
            const todoList = document.getElementById('todo-list');
            todoList.innerHTML = ''; // Clear the existing list
            todos.forEach(todo => {
                const li = createTodoElement(todo);
                todoList.appendChild(li);
            });
        })
        .catch(error => console.error('Error sorting todos by due date:', error));
}

// Function to sort todos by priority
function sortTodosByPriority() {
    fetch(SORT_BY_PRIORITY_URL)
        .then(response => response.json())
        .then(todos => {
            const todoList = document.getElementById('todo-list');
            todoList.innerHTML = ''; // Clear the existing list
            todos.forEach(todo => {
                const li = createTodoElement(todo);
                todoList.appendChild(li);
            });
        })
        .catch(error => console.error('Error sorting todos by priority:', error));
}
