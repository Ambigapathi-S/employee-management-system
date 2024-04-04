package com.example.EmployeeManagementBackend.service;

import com.example.EmployeeManagementBackend.dto.JwtAuthResponse;
import com.example.EmployeeManagementBackend.dto.LoginRequestDto;
import com.example.EmployeeManagementBackend.dto.RegisterDto;

public interface AuthService {
    String register(RegisterDto registerDto);

    JwtAuthResponse login(LoginRequestDto loginRequestDto);
}
