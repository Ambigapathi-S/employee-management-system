package com.example.EmployeeManagementBackend.repository;

import com.example.EmployeeManagementBackend.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Role findByName(String name);
}
