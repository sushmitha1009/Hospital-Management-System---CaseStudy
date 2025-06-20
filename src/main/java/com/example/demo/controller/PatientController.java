package com.example.demo.controller;

import com.example.demo.model.Patient;
import com.example.demo.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PatientController {

    @Autowired
    private PatientService patientService;

    @PostMapping("/addPatient")
    public ResponseEntity<String> addPatient(@RequestBody Patient patient) {
        return ResponseEntity.ok(patientService.addPatient(patient));
    }

    @PutMapping("/updatePatient/{id}")
    public ResponseEntity<String> updatePatient(@PathVariable int id, @RequestBody Patient updatedPatient) {
        return ResponseEntity.ok(patientService.updatePatient(id, updatedPatient));
    }

    @GetMapping("/searchByPatientName/{name}")
    public ResponseEntity<List<Patient>> getPatientsByName(@PathVariable String name) {
        return ResponseEntity.ok(patientService.getPatientsByName(name));
    }

    @PostMapping("/loginPatient/{email}/{passwordHash}")
    public ResponseEntity<Patient> login(@PathVariable String email, @PathVariable String passwordHash) {
        return ResponseEntity.ok(patientService.login(email, passwordHash));
    }
}
