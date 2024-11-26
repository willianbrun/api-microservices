import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id?: number

    @Column()
    title?: string

    @Column()
    description?: string

    @Column()
    startDate?: string

    @Column()
    endDate?: string

    @Column()
    priority?: number

    constructor(
        id?: number,
        title?: string,
        description?: string,
        startDate?: string,
        endDate?: string,
        priority?: number
    ) {
        this.id = id
        this.title = title
        this.description = description
        this.startDate = startDate
        this.endDate = endDate
        this.priority = priority
    }
}

export default Task