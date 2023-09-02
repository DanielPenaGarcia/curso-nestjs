import { Body, Controller, Delete, Get, Param, Post, Patch } from '@nestjs/common';

import { TaskService } from './task.service'
import { CreateTaskDTO, UpdateTaskDTO } from './dto/taskt.dto'

@Controller('task')
export class TaskController {

    constructor(private taskService: TaskService) {

    }

    @Get()
    getAllTask() {
        return this.taskService.getAllTask();
    }

    @Post()
    createTask(@Body() newTask: CreateTaskDTO) {
        return this.taskService.createTask(newTask.title, newTask.description);
    }

    @Delete(':id')
    deleteTask(@Param('id') id: string) {
        this.taskService.deleteTask(id);
    }

    @Patch(':id')
    updateTask(@Param('id') id: string, @Body() newFields: UpdateTaskDTO) {
        return this.taskService.updateTask(id, newFields);
    }
}
