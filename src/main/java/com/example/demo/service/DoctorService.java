package com.example.demo.service;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Doctor;
import com.example.demo.model.DoctorCategory;
import com.example.demo.repo.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorService {

    @Autowired
    private DoctorRepository doctorRepository;

    public String addDoctor(Doctor doctor) {
        doctorRepository.save(doctor);
        return "Doctor Added Successfully";
    }
    
    public List<Doctor> showDoctors() {
        return doctorRepository.findAll();
    }

    public List<Doctor> getDoctorsBySpecialty(DoctorCategory specialty) {
        List<Doctor> doctors = doctorRepository.findBySpecialty(specialty);
        if (doctors.isEmpty()) {
            throw new ResourceNotFoundException("No doctors found for specialty: " + specialty);
        }
        return doctors;
    }

    public List<Doctor> searchDoctorByName(String name) {
        List<Doctor> doctors = doctorRepository.findByFullNameContaining(name);
        if (doctors.isEmpty()) {
            throw new ResourceNotFoundException("No doctors found with name containing: " + name);
        }
        return doctors;
    }

    public Doctor login(String email, String passwordHash) {
        return doctorRepository.findAll()
                .stream()
                .filter(d -> d.getEmail().equals(email) && d.getPasswordHash().equals(passwordHash))
                .findFirst()
                .orElseThrow(() -> new ResourceNotFoundException("Invalid credentials"));
    }
}
