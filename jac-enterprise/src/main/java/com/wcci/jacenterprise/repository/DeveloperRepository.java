package com.wcci.jacenterprise.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wcci.jacenterprise.entity.Developer;

public interface DeveloperRepository extends JpaRepository<Developer, Long> {
    
}
