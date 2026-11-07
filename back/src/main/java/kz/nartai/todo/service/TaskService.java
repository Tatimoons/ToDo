package kz.nartai.todo.service;

import kz.nartai.todo.dto.TaskCreateRequestDto;
import kz.nartai.todo.dto.TaskResponseDto;
import kz.nartai.todo.entity.TaskEntity;
import kz.nartai.todo.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TaskService {
    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public List<TaskResponseDto> getAllTasks() {
        List<TaskEntity> tasks = taskRepository.findAll();
        List<TaskResponseDto> result = new ArrayList<>();

        for (TaskEntity task : tasks) {
            TaskResponseDto dto = toDto(task);
            result.add(dto);
        }

        return result;
    }

    public TaskResponseDto createTask(TaskCreateRequestDto request) {
        String normalizedTitle = request.getTitle().strip();
        TaskEntity task = new TaskEntity(normalizedTitle, request.getDescription());
        TaskEntity savedTask = taskRepository.save(task);

        return toDto(savedTask);
    }

    private TaskResponseDto toDto(TaskEntity task) {
        return new TaskResponseDto(
                task.getId(),
                task.getTitle(),
                task.getDescription(),
                task.getStatus(),
                task.getCreatedAt()
        );
    }
}
