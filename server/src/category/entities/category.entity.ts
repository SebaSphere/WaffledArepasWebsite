import {Column, Model, DataType, Table} from 'sequelize-typescript';

@Table
export class CategoryEntity extends Model {
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true
    })
    category_id: string; // uuid, primary key

    @Column
    category_name: string;

    @Column
    description: string

    @Column
    image_url: string // url holding an image of the category
}
