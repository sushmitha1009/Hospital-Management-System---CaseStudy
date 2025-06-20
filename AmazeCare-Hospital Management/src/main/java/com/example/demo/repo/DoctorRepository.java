package com.example.demo.repo;

import com.example.demo.model.Doctor;
import com.example.demo.model.DoctorCategory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DoctorRepository extends JpaRepository<Doctor, Integer> {
    List<Doctor> findBySpecialty(DoctorCategory specialty);
    List<Doctor> findByFullNameContaining(String fullName);
}
