package com.app.hnp.controller;

import com.app.hnp.model.Journal;
import com.app.hnp.service.JournalService;
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
        if ("desc".equalsIgnoreCase(order)) {
            return journalService.getAllJournalsOrderByDateDesc();
        }
        return journalService.getAllJournalsOrderByDateAsc();
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
        Journal updated = journalService.updateJournal(id, updatedJournal);
        return updated != null ? new ResponseEntity<>(updated, HttpStatus.OK)
                : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteJournal(@PathVariable Long id) {
        journalService.deleteJournal(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteAllJournals() {
        journalService.deleteAllJournals();
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
