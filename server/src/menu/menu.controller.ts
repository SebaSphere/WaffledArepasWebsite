import {Controller, Get} from '@nestjs/common';
import {AppService} from "../app.service";
import {MenuService} from "./menu.service";

@Controller('menu')
export class MenuController {

    constructor(private readonly menuService: MenuService) {}

    @Get()
    getMenu(): string {
        return this.menuService.getMenu();
    }


}