package kz.nartai.todo.dto;

import kz.nartai.todo.entity.TaskStatus;

import java.time.OffsetDateTime;

public class TaskResponseDto {
    private final Long id;
    private final String title;
    private final String description;
    private final TaskStatus status;
    private final OffsetDateTime createdAt;

    public TaskResponseDto(
            Long id,
            String title,
            String description,
            TaskStatus status,
            OffsetDateTime createdAt
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
        this.createdAt = createdAt;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public TaskStatus getStatus() {
        return status;
    }

    public OffsetDateTime getCreatedAt() {
        return createdAt;
    }
}
