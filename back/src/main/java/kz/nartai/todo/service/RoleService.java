package kz.nartai.todo.service;

import kz.nartai.todo.dto.RoleResponseDto;
import kz.nartai.todo.entity.RoleEntity;
import kz.nartai.todo.repository.RoleRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RoleService {
    private final RoleRepository roleRepository;

    public RoleService(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    public List<RoleResponseDto> getAllRoles() {
        List<RoleEntity> roles = roleRepository.findAll();
        List<RoleResponseDto> result = new ArrayList<>();

        for (RoleEntity role : roles) {
            RoleResponseDto dto = toDto(role);
            result.add(dto);
        }

        return result;
    }

    private RoleResponseDto toDto(RoleEntity role) {
        return new RoleResponseDto(
                role.getId(),
                role.getCode(),
                role.getName(),
                role.getDescription(),
                role.isEnabled(),
                role.isSystem()
        );
    }
}
