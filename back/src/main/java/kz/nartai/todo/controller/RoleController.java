package kz.nartai.todo.controller;

import kz.nartai.todo.dto.RoleResponseDto;
import kz.nartai.todo.service.RoleService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class RoleController {
    private final RoleService roleService;

    public RoleController(RoleService roleService) {
        this.roleService = roleService;
    }

    @GetMapping("/roles")
    public List<RoleResponseDto> getAllRoles() {
        return roleService.getAllRoles();
    }
}
