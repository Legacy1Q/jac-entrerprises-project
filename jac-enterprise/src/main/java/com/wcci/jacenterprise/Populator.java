package com.wcci.jacenterprise;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.wcci.jacenterprise.entity.Developer;
import com.wcci.jacenterprise.repository.DeveloperRepository;

@Component
public class Populator implements CommandLineRunner {

    @Autowired
    private DeveloperRepository developerRepository;

    @Override
    public void run(String... args) throws Exception {

        Developer developer = new Developer("Rheeze", "Kalahi", null, null);
        developerRepository.save(developer);

    }
}
