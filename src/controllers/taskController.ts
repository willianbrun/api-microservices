import { Request, Response } from "express";
import { appDataSource } from "../data-source";
import TaskRepository from "../repositories/taskRepository";

export class TaskController
{
    private taskRepository: TaskRepository;

    constructor()
    {
        this.taskRepository = new TaskRepository(appDataSource);
    }

    getAll = async (req: Request, res: Response): Promise<void> =>
    {
        const tasks = await this.taskRepository.getAll();
        res.status(200).json(tasks);
    };

    getById = async (req: Request, res: Response): Promise<void> =>
    {
        const task = await this.taskRepository.getById(parseInt(req.params.id));
        if (!task)
        {
            res.status(404).send('Task not found');
        } else
        {
            res.status(200).json(task);
        }
    };

    create = async (req: Request, res: Response): Promise<void> =>
    {
        const newTask = await this.taskRepository.create(req.body);
        res.status(201).json({ message: "Task added" });
    };

    update = async (req: Request, res: Response): Promise<void> =>
    {
        const updatedTask = await this.taskRepository.update(parseInt(req.params.id), req.body);
        if (!updatedTask)
        {
            res.status(404).send('Task not found');
        } else
        {
            res.status(200).json(updatedTask);
        }
    };

    delete = async (req: Request, res: Response): Promise<void> =>
    {
        const success = await this.taskRepository.delete(parseInt(req.params.id));
        if (!success)
        {
            res.status(404).send('Task not found');
        } else
        {
            res.status(204).send();
        }
    };
}