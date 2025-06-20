package com.example.demo.service;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Patient;
import com.example.demo.repo.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientService {

    @Autowired
    private PatientRepository patientRepository;

    public String addPatient(Patient patient) {
         patientRepository.save(patient);
         return "Patient Added Successfully";
    }

    public String updatePatient(int id, Patient updatedPatient) {
        Patient existingPatient = patientRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Patient with ID " + id + " not found"));
        existingPatient.setFullName(updatedPatient.getFullName());
        existingPatient.setDateOfBirth(updatedPatient.getDateOfBirth());
        existingPatient.setGender(updatedPatient.getGender());
        existingPatient.setContactNumber(updatedPatient.getContactNumber());
        existingPatient.setEmail(updatedPatient.getEmail());
        existingPatient.setPasswordHash(updatedPatient.getPasswordHash());
        existingPatient.setMedicalHistory(updatedPatient.getMedicalHistory());
        patientRepository.save(existingPatient);
        return "Patient updated successfully";
    }

    public List<Patient> getPatientsByName(String name) {
        List<Patient> patients = patientRepository.findByFullNameContaining(name);
        if (patients.isEmpty()) {
            throw new ResourceNotFoundException("No patients found with name containing: " + name);
        }
        return patients;
    }

    public Patient login(String email, String passwordHash) {
        return patientRepository.findByEmailAndPasswordHash(email, passwordHash)
                .orElseThrow(() -> new ResourceNotFoundException("Invalid credentials"));
    }
}
