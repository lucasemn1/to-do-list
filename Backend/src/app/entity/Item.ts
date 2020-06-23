import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Note } from './Note';

@Entity()
export class Item {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    value: string;

    @Column()
    checked: boolean;

    @ManyToOne(type => Note, note => note.items)
    note: Note;
}
