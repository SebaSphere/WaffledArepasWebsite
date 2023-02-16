import {MenuItemEntity} from "./menu-item.entity";
import {MenuItems} from "../constants";

export const menuItemsProviders = [
    {
        provide: MenuItems.MENU_ITEM_REPOSITORY,
        useValue: MenuItemEntity,
    },
];