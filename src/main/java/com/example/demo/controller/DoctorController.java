package com.example.demo.controller;

import com.example.demo.model.Doctor;
import com.example.demo.model.DoctorCategory;
import com.example.demo.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    @PostMapping("/addDoctor")
    public ResponseEntity<String> addDoctor(@RequestBody Doctor doctor) {
        return ResponseEntity.ok(doctorService.addDoctor(doctor));
    }
    
    @GetMapping("/showDoctors")
    public List<Doctor> showDoctors() {
        return doctorService.showDoctors();
    }

    @GetMapping("/specialty/{specialty}")
    public ResponseEntity<List<Doctor>> getDoctorsBySpecialty(@PathVariable DoctorCategory specialty) {
        return ResponseEntity.ok(doctorService.getDoctorsBySpecialty(specialty));
    }

    @GetMapping("/searchByDoctorName/{name}")
    public ResponseEntity<List<Doctor>> searchDoctorByName(@PathVariable String name) {
        return ResponseEntity.ok(doctorService.searchDoctorByName(name));
    }

    @PostMapping("/loginDoctor/{email}/{passwordHash}")
    public ResponseEntity<Doctor> login(@PathVariable String email, @PathVariable String passwordHash) {
        return ResponseEntity.ok(doctorService.login(email, passwordHash));
    }
}
