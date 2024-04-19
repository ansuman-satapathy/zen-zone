package com.app.zenzone.controller;

import com.app.zenzone.model.Habit;
import com.app.zenzone.service.HabitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/habits")
public class HabitController {

    @Autowired
    private HabitService habitService;

    @GetMapping
    public ResponseEntity<List<Habit>> getAllHabits() {
        List<Habit> habits = habitService.getAllHabits();
        return new ResponseEntity<>(habits, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Habit> getHabitById(@PathVariable Long id) {
        Habit habit = habitService.getHabitById(id);
        if (habit != null) {
            return new ResponseEntity<>(habit, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<Habit> createHabit(@RequestBody Habit habit) {
        Habit createdHabit = habitService.createHabit(habit);
        return new ResponseEntity<>(createdHabit, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Habit> updateHabit(@PathVariable Long id, @RequestBody Habit habit) {
        Habit updatedHabit = habitService.updateHabit(id, habit);
        if (updatedHabit != null) {
            return new ResponseEntity<>(updatedHabit, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteHabit(@PathVariable Long id) {
        habitService.deleteHabit(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteAllHabits() {
        habitService.deleteAllHabits();
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
