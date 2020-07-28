import { TopMenuHelper } from './top-menu.helper';
import { BottomMenuHelper } from './bottom-menu.helper';
import { Menu } from '../../models/menu.model';
export class MenuHelper {
  static getMenu(): Menu {
    const menu = new Menu();
    menu.topMenu = TopMenuHelper.getTopMenu();
    menu.bottomMenu = BottomMenuHelper.getButtonMenu();
    return menu;
  }

  static getMenuSize(isExtended: boolean): number {
    if (isExtended) {
      return 152;
    } else {
      return 35;
    }
  }

}
