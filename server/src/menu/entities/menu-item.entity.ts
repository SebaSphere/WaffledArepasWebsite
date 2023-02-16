import {Table, Column, Model, DataType, ForeignKey} from 'sequelize-typescript';
import {CategoryEntity} from "../../category/entities/category.entity";

@Table
export class MenuItemEntity extends Model {

    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true
    })
    product_id: string; // uuid, primary key

    @ForeignKey(() => CategoryEntity)
    @Column({
        type: DataType.UUID,
        defaultValue: null
    })
    category_id: string; // uuid, links the category foreign key

    @Column
    product_name: string;

    @Column
    description: string

    @Column({
        type: DataType.DECIMAL(10, 2)
    })
    price: number // price in USD

    @Column
    image_url: string // url holding an image of the menu item
}