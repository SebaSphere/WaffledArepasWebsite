import { Sequelize } from 'sequelize-typescript';
import { MenuItemEntity } from './menu/menu-item.entity';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'postgres',
                host: 'postgres-database',
                port: 5432,
                username: 'postgres',
                password: 'agoodpassword', // TODO: put this in the creds config + docker up the postgres server
                database: 'postgres',
            });
            sequelize.addModels([MenuItemEntity]);
            await sequelize.sync();
            return sequelize;
        },
    },
];