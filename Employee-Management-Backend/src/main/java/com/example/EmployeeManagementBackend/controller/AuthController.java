package com.example.EmployeeManagementBackend.controller;

import com.example.EmployeeManagementBackend.dto.JwtAuthResponse;
import com.example.EmployeeManagementBackend.dto.LoginRequestDto;
import com.example.EmployeeManagementBackend.dto.RegisterDto;
import com.example.EmployeeManagementBackend.service.AuthService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@AllArgsConstructor
@RequestMapping("api/auth")
public class AuthController {
    private AuthService authService;


    @PostMapping("login")
    public ResponseEntity<JwtAuthResponse> login(@RequestBody LoginRequestDto requestDto) {
        JwtAuthResponse jwtAuthResponse = authService.login(requestDto);

        return ResponseEntity.ok(jwtAuthResponse);
    }

    @PostMapping("register")
    public ResponseEntity<String> register(@RequestBody RegisterDto registerDto) {
        String response = authService.register(registerDto);

        return ResponseEntity.ok(response);
    }
}
