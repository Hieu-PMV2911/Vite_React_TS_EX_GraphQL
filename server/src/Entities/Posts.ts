import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class Posts extends BaseEntity {

	@PrimaryGeneratedColumn()
	id!: number;

	@Column()
	userName!: string;

	@Column()
	title!: string;

	@Column()
	description!: string;

	@Column()
	image!: string;
}