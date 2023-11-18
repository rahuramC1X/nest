// src/your-module/your-entity.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('trackwork')
export class Trackwork {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  topic: string;

  @Column({ type: 'varchar' })
  subtopic: string;

  @Column({ type: 'text' })
  explanation: string;

  @Column({ type: 'varchar' })
  provider: string;

  @Column({ type: 'text' })
  rootCause: string;

}
