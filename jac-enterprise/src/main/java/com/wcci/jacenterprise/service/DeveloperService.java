package com.wcci.jacenterprise.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.wcci.jacenterprise.entity.Developer;
import com.wcci.jacenterprise.repository.DeveloperRepository;

@Service
public class DeveloperService {
    
    @Autowired
    private DeveloperRepository developerRepository;

    public List<Developer> getAllDevelopers() {
        return this.developerRepository.findAll();
    }

    public Developer getDeveloperById(long id) {
        return this.developerRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                        "Developer with id " + id + " was not found!"));
    }

    public List<Developer> getDevelopersByLastName(String lastName) {
        List<Developer> allDevelopers = getAllDevelopers();
        List<Developer> developersByLastName = new ArrayList<>();
        for (Developer developer : allDevelopers) {
            if (developer.getLastName().equals(lastName)) {
                developersByLastName.add(developer);
            }
        }
        return developersByLastName;
    }

    public void addDeveloper(Developer developer) {
        this.developerRepository.save(developer);
    }

    public Developer updateDeveloper(long id, Developer updatedDeveloper) {
        Developer existingDeveloper = getDeveloperById(id);
        existingDeveloper.setFirstName(
                updatedDeveloper.getFirstName() == null ? existingDeveloper.getFirstName() : updatedDeveloper.getFirstName());
        existingDeveloper.setLastName(updatedDeveloper.getLastName() == null ? existingDeveloper.getLastName() : updatedDeveloper.getLastName());
        existingDeveloper.setPicture(updatedDeveloper.getPicture() == null ? existingDeveloper.getPicture() : updatedDeveloper.getPicture());
        existingDeveloper.setBio(updatedDeveloper.getBio() == null ? existingDeveloper.getBio() : updatedDeveloper.getBio());
        this.developerRepository.save(existingDeveloper);
        return existingDeveloper;
    }

    public void deleteDeveloper(long id) {
        this.developerRepository.deleteById(id);
    }
}
