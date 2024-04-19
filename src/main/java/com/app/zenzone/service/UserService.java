package com.app.zenzone.service;

import com.app.zenzone.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.zenzone.model.User;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    
    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    
    public User addUser(User user) {
        return userRepository.save(user);
    }

    public boolean authenticateUser(String username, String password) {
        User user = userRepository.findByUsername(username);
        return user != null && user.getPassword().equals(password);
    }
}

