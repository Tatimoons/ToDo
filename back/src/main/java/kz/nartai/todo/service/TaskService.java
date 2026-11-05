package kz.nartai.todo.service;

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
