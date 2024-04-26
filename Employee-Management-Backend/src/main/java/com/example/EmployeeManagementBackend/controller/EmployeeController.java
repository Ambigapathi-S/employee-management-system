package com.example.EmployeeManagementBackend.controller;

import com.example.EmployeeManagementBackend.dto.EmployeeDto;
import com.example.EmployeeManagementBackend.entity.Employee;
import com.example.EmployeeManagementBackend.service.EmployeeService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@AllArgsConstructor
@RequestMapping("api/employee")
public class EmployeeController {
    private EmployeeService employeeService;

    @Operation(
            summary = "Create Employee REST API ",
            description = "Create Employee"
    )
    @ApiResponse(
            responseCode = "200",
            description = "HTTP Status 200 Created"
    )
    @PreAuthorize("hasRole(\"ADMIN\")")
    @PostMapping
    public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto) {
        EmployeeDto savedEmployee = employeeService.createEmployee(employeeDto);
        return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }

    @Operation(
            summary = "Get All Employees REST API ",
            description = "Get All Employees"
    )
    @ApiResponse(
            responseCode = "200",
            description = "HTTP Status 200 Success"
    )
    @PreAuthorize("hasAnyRole(\"ADMIN\", \"USER\")")
    @GetMapping
    public ResponseEntity<List<EmployeeDto>> getAllEmployees() {
        List<EmployeeDto> employeeDtoList = employeeService.getAllEmployees();
        return ResponseEntity.ok().body(employeeDtoList);
    }

    @Operation(
            summary = "Get All Employees REST API By Employee Id",
            description = "Get All Employees By Employee Id"
    )
    @ApiResponse(
            responseCode = "200",
            description = "HTTP Status 200 Success"
    )
    @PreAuthorize("hasAnyRole(\"ADMIN\", \"USER\")")
    @GetMapping("{id}")
    public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable("id") Long id) {
        EmployeeDto employeeDto = employeeService.getEmployeeById(id);
        return ResponseEntity.ok().body(employeeDto);
    }

    @Operation(
            summary = "Update Employee REST API ",
            description = "Update Employee"
    )
    @ApiResponse(
            responseCode = "200",
            description = "HTTP Status 200 Success"
    )
    @PreAuthorize("hasRole(\"ADMIN\")")
    @PutMapping("update/{id}")
    public ResponseEntity<EmployeeDto> updateEmployee(@RequestBody EmployeeDto employeeDto, @PathVariable("id") Long id) {
        EmployeeDto updatedEmployee = employeeService.updateEmployee(employeeDto,id);
        return ResponseEntity.ok(updatedEmployee);
    }

    @Operation(
            summary = "Delete Employee REST API ",
            description = "HTTP Status 200 Success"
    )
    @ApiResponse(
            responseCode = "200",
            description = "OK"
    )
    @PreAuthorize("hasRole(\"ADMIN\")")
    @DeleteMapping("delete/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable Long id) {
        employeeService.deleteEmployee(id);
        return ResponseEntity.ok("Employee deleted successfully!");
    }
}
