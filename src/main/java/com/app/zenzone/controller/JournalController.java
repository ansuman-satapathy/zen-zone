package com.app.zenzone.controller;

import com.app.zenzone.model.Journal;
import com.app.zenzone.service.JournalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/journals")
public class JournalController {

    @Autowired
    private JournalService journalService;

    @GetMapping
    public List<Journal> getAllJournals(@RequestParam(required = false, defaultValue = "asc") String order) {
        return journalService.getallJournals();
    }

    @PostMapping
    public ResponseEntity<Journal> createJournal(@RequestBody Journal journal) {
        Journal createdJournal = journalService.createJournal(journal);
        return new ResponseEntity<>(createdJournal, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Journal> getJournalById(@PathVariable Long id) {
        return journalService.getJournalById(id)
                .map(journal -> new ResponseEntity<>(journal, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Journal> updateJournal(@PathVariable Long id, @RequestBody Journal updatedJournal) {
        Journal journal = journalService.updateJournal(id, updatedJournal);
        if (journal != null) {
            return ResponseEntity.ok(journal); // Return 200 OK with the updated journal
        } else {
            return ResponseEntity.notFound().build(); // Return 404 Not Found if journal is not found
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteJournal(@PathVariable Long id) {
        journalService.deleteJournal(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
