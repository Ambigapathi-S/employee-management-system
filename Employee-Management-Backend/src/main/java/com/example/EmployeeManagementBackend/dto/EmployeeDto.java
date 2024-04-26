package com.example.EmployeeManagementBackend.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeDto {

    private Long id;

    @Schema(description = "Employee First Name")
    @NotEmpty(message = "First Name Cannot be Empty")
    private String firstName;

    @Schema(description = "Employee Last Name")
    @NotEmpty(message = "Last Name Cannot be Empty")
    private String lastName;

    @Schema(description = "Employee Email")
    @NotEmpty(message = "Employee Email Cannot be Empty")
    private String email;

    @Schema(description = "Employee Mobile Number")
    @NotEmpty(message = "Employee Mobile Number Cannot be Empty")
    private String mobileNo;
}
