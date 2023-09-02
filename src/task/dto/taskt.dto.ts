import {Task, TaskStatus} from '../task.entity'; 
import { IsString, IsNotEmpty, MinLength, IsOptional, IsIn } from 'class-validator'

export class CreateTaskDTO{
    @IsString() //Validar que es un string
    @IsNotEmpty() //Que no esté vacío (" ")
    //@MinLength(3) menor o igual a 3
    title:string;
    @IsString() //Validar que es un string
    description: string;
}

export class UpdateTaskDTO{
    @IsString() //Validar que es un string
    @IsOptional()
    title?: string;
    @IsString() //Validar que es un string
    @IsOptional()
    description?: string;
    @IsString() //Validar que es un string
    @IsOptional()
    @IsIn([TaskStatus.PENDING, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
    status?: TaskStatus;
}