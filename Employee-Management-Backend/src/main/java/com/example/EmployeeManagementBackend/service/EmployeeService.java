package com.example.EmployeeManagementBackend.service;

import com.example.EmployeeManagementBackend.dto.EmployeeDto;

import java.util.List;

public interface EmployeeService {
   EmployeeDto createEmployee(EmployeeDto employeeDto);
   List<EmployeeDto> getAllEmployees();
   EmployeeDto getEmployeeById(Long id);
   EmployeeDto updateEmployee(EmployeeDto employeeDto, Long id);
   void deleteEmployee(Long id);
}
