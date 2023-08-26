package com.wcci.jacenterprise.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.wcci.jacenterprise.entity.Developer;
import com.wcci.jacenterprise.service.DeveloperService;

@RestController
public class DeveloperController {
    
    @Autowired
    DeveloperService developerService;

    @GetMapping("/developers")
    public List<Developer> findAllDevelopers() {
        return this.developerService.getAllDevelopers();
    }

    @GetMapping("/developer/{id}")
    public Developer findDeveloperById(@PathVariable long id) {
        return this.developerService.getDeveloperById(id);
    }

    @GetMapping("/developers/{lastName}")
    public List<Developer> findDevelopersByName(@PathVariable String lastName) {
        return this.developerService.getDevelopersByLastName(lastName);
    }

    @PostMapping("/addDeveloper")
    public void addDeveloper(@RequestBody Developer developer) {
        this.developerService.addDeveloper(developer);
    }

    @PutMapping("/developer/{id}")
    public Developer modifyDeveloper(@PathVariable long id, @RequestBody Developer updatedDeveloper) {
        return this.developerService.updateDeveloper(id, updatedDeveloper);
    }

    @DeleteMapping("/deleteDeveloper/{id}")
    public void removeDeveloper(@PathVariable long id) {
        this.developerService.deleteDeveloper(id);
    }
}
