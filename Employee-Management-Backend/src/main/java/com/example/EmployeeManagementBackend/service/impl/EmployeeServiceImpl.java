package com.example.EmployeeManagementBackend.service.impl;

import com.example.EmployeeManagementBackend.dto.EmployeeDto;
import com.example.EmployeeManagementBackend.entity.Employee;
import com.example.EmployeeManagementBackend.exception.EmailAlreadyExistsException;
import com.example.EmployeeManagementBackend.exception.ResourceNotFoundException;
import com.example.EmployeeManagementBackend.repository.EmployeeRepository;
import com.example.EmployeeManagementBackend.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {
    private EmployeeRepository employeeRepository;
    private ModelMapper modelMapper;
    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee = modelMapper.map(employeeDto, Employee.class);
        // Check email is present or not
        Optional<Employee> optionalUser = employeeRepository.findByEmail(employee.getEmail());
        if(optionalUser.isPresent()) {
            throw new EmailAlreadyExistsException("Email Already Exists for Employee");
        }
        return modelMapper.map(employeeRepository.save(employee), EmployeeDto.class);
    }

    @Override
    public List<EmployeeDto> getAllEmployees() {
        return employeeRepository.findAll()
                .stream().map(todo -> modelMapper.map(todo, EmployeeDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public EmployeeDto getEmployeeById(Long id) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee", "id", id));
        return modelMapper.map(employee, EmployeeDto.class);
    }

    @Override
    public EmployeeDto updateEmployee(EmployeeDto employeeDto, Long id) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee", "id", id));
        employee.setFirstName(employeeDto.getFirstName());
        employee.setLastName(employeeDto.getLastName());
        employee.setEmail(employeeDto.getEmail());
        employee.setMobileNo(employeeDto.getMobileNo());
        return modelMapper.map(employeeRepository.save(employee), EmployeeDto.class);
    }

    @Override
    public void deleteEmployee(Long id) {
        Employee existingUser = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee", "id", id));
        employeeRepository.deleteById(id);
    }
}
