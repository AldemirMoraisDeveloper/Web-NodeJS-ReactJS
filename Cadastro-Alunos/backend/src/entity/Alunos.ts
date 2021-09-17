import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
 
@Entity()
export class Alunos{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    nome: string;
 
    @Column()
    cpf: string;
 
    @Column()
    turma: string;
 
    @Column()
    idade: number;
 
    @CreateDateColumn()
    created_at: Date;
 
    @UpdateDateColumn()
    updated_at: Date;
}
