package com.app.hnp.service;

import com.app.hnp.model.Habit;
import com.app.hnp.repository.HabitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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

    public void deleteAllHabits() {
        habitRepository.deleteAll();
    }
}

