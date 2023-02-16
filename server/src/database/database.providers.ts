import { Sequelize } from 'sequelize-typescript';
import { MenuItemEntity } from '../menu/entities/menu-item.entity';
import {DatabaseProvider} from "../constants";
import {CategoryEntity} from "../category/entities/category.entity";

export const databaseProviders = [
    {
        provide: DatabaseProvider.DATABASE_PROVIDER,
        useFactory: async () => {
            // TODO: put this in the creds config
            const sequelize = new Sequelize({
                dialect: 'postgres',
                host: 'postgres-database',
                port: 5432,
                username: 'postgres',
                password: 'postgres',
                database: 'postgres',
            });
            sequelize.addModels([MenuItemEntity, CategoryEntity]);
            await sequelize.sync();
            return sequelize;
        },
    },
];