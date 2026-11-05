package kz.nartai.todo.controller;

import kz.nartai.todo.dto.TaskResponseDto;
import kz.nartai.todo.service.TaskService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TaskController {
    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping("/tasks")
    public List<TaskResponseDto> getAllTasks() {
        return taskService.getAllTasks();
    }
}
