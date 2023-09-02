import { Injectable } from '@nestjs/common';
import {Task, TaskStatus} from './task.entity'
import { v4 } from 'uuid'
import { UpdateTaskDTO } from './dto/taskt.dto';

@Injectable()
export class TaskService {

     private tasks: Task[] = [
        {
            id: '1',
            title: "first task",
            description : "some task",
            status: TaskStatus.PENDING
        }
    ]

    getAllTask(){
        return this.tasks;
    }
    createTask(title: string, description:string){

        const task: Task = 
        {
            id: v4(),
            title,
            description,
            status: TaskStatus.PENDING
        }

        this.tasks.push(task);

        return task;
    }

    private getTaskById(id: string): Task{
        return this.tasks.find(task => task.id === id);
    }

    updateTask(id: string, updatedFields: UpdateTaskDTO): Task{

        const task: Task = this.getTaskById(id);

        const newTask: Task = Object.assign(task, updatedFields);

        this.tasks = this.tasks.map(task => task.id === id ? newTask: task);

        return newTask;
    }

    deleteTask(id: string)
    {
        this.tasks = this.tasks.filter(task => task.id !== id)
    }
}
