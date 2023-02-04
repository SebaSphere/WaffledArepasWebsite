import { Table, Column, Model, DataType } from 'sequelize-typescript';
import sequelize from "sequelize";

@Table
export class MenuItemEntity extends Model {

    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true
    })
    product_id: string; // uuid, primary key

    @Column
    product_name: string;

    @Column
    description: string

    @Column({
        type: DataType.DECIMAL(10, 2)
    })
    price: number // price in USD

    @Column
    image_url: string // url holding a image of the menu item

    // TODO: create a foreign key relationship with a new table called "category"

    // TODO: create a timestamp holding when the table was created and updated

}