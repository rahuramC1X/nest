import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DesignPatterns{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:'varchar'})
    designPattern: string

    @Column({type:'text'})
    exampleProgram: string

}