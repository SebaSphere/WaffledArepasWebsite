import { Module } from '@nestjs/common';
import { MenuController } from './menu.controller';
import { MenuService } from './menu.service';
import { menuItemsProviders } from './menu-items.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
    imports: [],
    controllers: [MenuController],
    providers: [
        MenuService,
        ...menuItemsProviders,
    ],
})
export class MenuModule {}