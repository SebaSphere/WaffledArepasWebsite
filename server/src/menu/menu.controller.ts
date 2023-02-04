import {Controller, Get} from '@nestjs/common';
import {MenuService} from "./menu.service";

@Controller('menu')
export class MenuController {

    constructor(private readonly menuService: MenuService) {}

    @Get()
    async getMenu(): Promise<string> {
        return await this.menuService.getMenu();
    }

}
