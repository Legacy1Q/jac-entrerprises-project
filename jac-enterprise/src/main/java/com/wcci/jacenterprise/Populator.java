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

        Developer rheeze = new Developer("Rheeze", "Kalahi", "https://rheeze-dev.github.io/img/profile.jpg", "https://rheeze-dev.github.io/");
        developerRepository.save(rheeze);

        Developer mike = new Developer("Mike", "Sims", "https://mike.github.io/img/profile.jpg", "https://mike.github.io/");
        developerRepository.save(mike);

        Developer ashley = new Developer("Ashley", "B", "https://ashley.github.io/img/profile.jpg", "https://ashley.github.io/");
        developerRepository.save(ashley);

        Developer emily = new Developer("Emily", "Leinenbach", "https://emily.github.io/img/profile.jpg", "https://emily.github.io/");
        developerRepository.save(emily);

        Developer nik = new Developer("Nik", "Bradshaw", "https://nik.github.io/img/profile.jpg", "https://nik.github.io/");
        developerRepository.save(nik);

    }
}
