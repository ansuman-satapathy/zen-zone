package com.app.hnp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Habit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private int completionsPerDay;
    private String streakGoal;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getCompletionsPerDay() {
        return completionsPerDay;
    }

    public void setCompletionsPerDay(int completionsPerDay) {
        this.completionsPerDay = completionsPerDay;
    }

    public String getStreakGoal() {
        return streakGoal;
    }

    public void setStreakGoal(String streakGoal) {
        this.streakGoal = streakGoal;
    }
}
