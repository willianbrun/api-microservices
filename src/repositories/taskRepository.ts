import { DataSource, In, Repository } from 'typeorm'
import TaskEntity from '../entities/task'

class TaskRepository implements TaskRepository {
    private repository: Repository<TaskEntity>

    constructor(dataSource: DataSource) {
        this.repository = dataSource.getRepository(TaskEntity)
    }

    async getAll(): Promise<TaskEntity[]> {
        return this.repository.find()
    }

    async getById(id: number): Promise<TaskEntity | undefined> {
        const task = await this.repository.findOneBy({ id: id })
        return task || undefined
    }

    async getBy(ids: number[]): Promise<TaskEntity[] | undefined> {
        const tasks = await this.repository.findBy({
            id: In(ids)
        })
        return tasks || undefined;
    }

    async create(task: Omit<TaskEntity, 'id'>): Promise<TaskEntity> {
        const newtask = this.repository.create(task);
        return this.repository.save(newtask);
    }

    async update(id: number, task: Partial<Omit<TaskEntity, 'id'>>): Promise<TaskEntity | undefined> {
        const taskToUpdate = await this.getById(id)

        if (!taskToUpdate) {
            return undefined
        }
        return this.repository.merge(taskToUpdate, task);
    }

    async delete(id: number): Promise<boolean> {
        const result = await this.repository.delete(id);
        return result?.affected ? result.affected > 0 : false;
    }
}

export default TaskRepository;