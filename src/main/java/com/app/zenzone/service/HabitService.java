package com.app.zenzone.service;

import com.app.zenzone.model.Habit;
import com.app.zenzone.repository.HabitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HabitService {

    @Autowired
    private HabitRepository habitRepository;

    public List<Habit> getAllHabits() {
        return habitRepository.findAll();
    }

    public Habit getHabitById(Long id) {
        return habitRepository.findById(id).orElse(null);
    }

    public Habit createHabit(Habit habit) {
        habit.setCompleted(false);
        return habitRepository.save(habit);
    }

    public Habit updateHabit(Long id, Habit updatedHabit) {
        if (habitRepository.existsById(id)) {
            updatedHabit.setId(id);
            return habitRepository.save(updatedHabit);
        } else {
            return null; // Habit not found
        }
    }

    public void deleteHabit(Long id) {
        habitRepository.deleteById(id);
    }

    public Habit markHabitAsCompleted(Long id) {
        Optional<Habit> optionalHabit = habitRepository.findById(id);
        if (optionalHabit.isPresent()) {
            Habit habit = optionalHabit.get();
            habit.setCompleted(true); // Marking the habit as completed
            return habitRepository.save(habit); // Persisting the change in the database
        } else {
            // Handle case where habit with the given id is not found
            throw new IllegalArgumentException("Habit with id " + id + " not found");
        }
    }

}
