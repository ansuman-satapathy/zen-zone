package com.app.zenzone.repository;

import com.app.zenzone.model.Todo;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {
    
    
}
