package com.app.hnp.service;

import com.app.hnp.model.Todo;
import com.app.hnp.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TodoService {

    @Autowired
    private TodoRepository todoRepository;

    public List<Todo> getAllTodos() {
        return todoRepository.findAll();
    }

    public Todo createTodo(Todo todo) {
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

    public void deleteAllTodos() {
        todoRepository.deleteAll();
    }

    public List<Todo> sortByDueDate() {
        return getAllTodos().stream()
                .sorted(Comparator.comparing(Todo::getDueDate))
                .collect(Collectors.toList());
    }

    public List<Todo> sortByPriority() {
        return getAllTodos().stream()
                .sorted(Comparator.comparingInt(Todo::getPriority))
                .collect(Collectors.toList());
    }
}
