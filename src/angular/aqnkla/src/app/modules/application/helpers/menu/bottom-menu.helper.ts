import { Menu, MenuGroup, MenuItem } from '../../models/menu.model';
import { SvgGalleryHelper } from 'src/app/helpers/svg/svg-gallery.helper';
import { SvgIcon } from 'src/app/helpers/svg/svg.icon';
export class BottomMenuHelper {

  static getButtonMenu(): MenuGroup[] {
    const groups = [];
    const account = new MenuGroup();
    account.rootItem = {
      label: 'Account',
      link: 'account',
      svgPath: SvgGalleryHelper.getIcon(SvgIcon.account)
    };
    account.subItems = [];
    account.subItems.push(this.getSettingsItem());
    account.subItems.push(this.getLogoutItem());
    groups.push(account);
    return groups;
  }


  private static getSettingsItem(): MenuItem {
    const settings = {
      label: 'Settings',
      link: 'settings',
      svgPath: SvgGalleryHelper.getIcon(SvgIcon.settings)
    };
    return settings;
  }

  private static getLogoutItem(): MenuItem {
    const settings = {
      label: 'Logout',
      link: 'logout',
      svgPath: SvgGalleryHelper.getIcon(SvgIcon.logout)
    };
    return settings;
  }
}
