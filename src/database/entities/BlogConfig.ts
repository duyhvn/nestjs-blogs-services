import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('blog_config')
export class BlogConfig {
    @PrimaryGeneratedColumn('increment', {name: 'id'})
    id: number;

    @Column('character varying', {name: 'name', nullable: false, unique: true})
    name: string;

    @Column('character varying', {name: 'secret_key', nullable: true})
    secretKey?: string;

}
