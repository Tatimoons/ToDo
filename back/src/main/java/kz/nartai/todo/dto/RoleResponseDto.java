package kz.nartai.todo.dto;

public class RoleResponseDto {
    private final Long id;
    private final String code;
    private final String name;
    private final String description;
    private final boolean enabled;
    private final boolean system;

    public RoleResponseDto(
            Long id,
            String code,
            String name,
            String description,
            boolean enabled,
            boolean system
    ) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.description = description;
        this.enabled = enabled;
        this.system = system;
    }

    public Long getId() {
        return id;
    }

    public String getCode() {
        return code;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public boolean isSystem() {
        return system;
    }
}
