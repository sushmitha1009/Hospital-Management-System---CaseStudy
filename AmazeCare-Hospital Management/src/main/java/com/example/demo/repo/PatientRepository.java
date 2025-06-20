package com.example.demo.repo;

import com.example.demo.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PatientRepository extends JpaRepository<Patient, Integer> {
    List<Patient> findByFullNameContaining(String fullName);
    Optional<Patient> findByEmailAndPasswordHash(String email, String passwordHash);
}
