package com.example.EmployeeManagementBackend.controller;

import com.example.EmployeeManagementBackend.dto.JwtAuthResponse;
import com.example.EmployeeManagementBackend.dto.LoginRequestDto;
import com.example.EmployeeManagementBackend.dto.RegisterDto;
import com.example.EmployeeManagementBackend.service.AuthService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@AllArgsConstructor
@RequestMapping("api/auth")
public class AuthController {
    private AuthService authService;

    @Operation(
            summary = "Login User REST API ",
            description = "Login User"
    )
    @ApiResponse(
            responseCode = "201",
            description = "HTTP Status 201 Success"
    )
    @PostMapping("login")
    public ResponseEntity<JwtAuthResponse> login(@RequestBody LoginRequestDto requestDto) {
        JwtAuthResponse jwtAuthResponse = authService.login(requestDto);

        return ResponseEntity.ok(jwtAuthResponse);
    }

    @Operation(
            summary = "Register User REST API ",
            description = "Register User"
    )
    @ApiResponse(
            responseCode = "200",
            description = "HTTP Status 201 Created"
    )
    @PostMapping("register")
    public ResponseEntity<String> register(@RequestBody RegisterDto registerDto) {
        String response = authService.register(registerDto);

        return ResponseEntity.ok(response);
    }
}
