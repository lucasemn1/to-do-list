import { 
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    OneToMany
} from 'typeorm';
import { Item } from './Item';

@Entity()
export class Note {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @OneToMany(type => Item, item => item.note, { onDelete: "CASCADE" })
    items: Item;
}
