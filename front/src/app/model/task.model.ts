export interface Task {
    id: number;
    title: string;
}

export interface TaskCreateRequest {
    title: string;
    description?: string;
}
