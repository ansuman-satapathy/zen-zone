package com.app.zenzone.service;

import com.app.zenzone.model.Journal;
import com.app.zenzone.repository.JournalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JournalService {

    @Autowired
    private JournalRepository journalRepository;

    public List<Journal> getallJournals() {
        return journalRepository.findAll();
    }

    public Journal createJournal(Journal journal) {
        return journalRepository.save(journal);
    }

    public Optional<Journal> getJournalById(Long id) {
        return journalRepository.findById(id);
    }

    public Journal updateJournal(Long id, Journal updatedJournal) {
        if (journalRepository.existsById(id)) {
            updatedJournal.setId(id);
            return journalRepository.save(updatedJournal);
        } else {
            return null;
        }
    }

    public void deleteJournal(Long id) {
        journalRepository.deleteById(id);
    }
}
