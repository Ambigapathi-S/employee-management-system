package com.example.EmployeeManagementBackend.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegisterDto {
    @Schema(description = "Name")
    @NotEmpty(message = "Name Cannot be Empty")
    private String name;

    @Schema(description = "Email")
    @NotEmpty(message = "Email Cannot be Empty")
    private String email;

    @Schema(description = "Username")
    @NotEmpty(message = "Username Cannot be Empty")
    private String username;

    @Schema(description = "Password")
    @NotEmpty(message = "Password Cannot be Empty")
    private String password;
}
