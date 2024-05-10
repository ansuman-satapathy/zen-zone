package com.app.zenzone.service;

import com.app.zenzone.model.Todo;
import com.app.zenzone.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TodoService {

    @Autowired
    private TodoRepository todoRepository;

    public List<Todo> getAllTodos() {
        return todoRepository.findAll();
    }

    public Todo createTodo(Todo todo) {
        todo.setCompleted(false);
        return todoRepository.save(todo);
    }

    public Optional<Todo> getTodoById(Long id) {
        return todoRepository.findById(id);
    }

    public Todo updateTodo(Long id, Todo updatedTodo) {
        if (todoRepository.existsById(id)) {
            updatedTodo.setId(id);
            return todoRepository.save(updatedTodo);
        } else {
            return null; // Handle not found case
        }
    }

    public void deleteTodo(Long id) {
        todoRepository.deleteById(id);
    }

    public Todo markTodoAsCompleted(Long id) {
        Optional<Todo> optionalTodo = todoRepository.findById(id);
        if (optionalTodo.isPresent()) {
            Todo todo = optionalTodo.get();
            todo.setCompleted(true); // Marking the todo as completed
            return todoRepository.save(todo); // Persisting the change in the database
        } else {
            // Handle case where todo with the given id is not found
            throw new IllegalArgumentException("Todo with id " + id + " not found");
        }
    }
}
