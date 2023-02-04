import { Injectable } from '@nestjs/common';

@Injectable()
export class MenuService {
    getMenu(): string {
        return 'im a menu';
    }
}
