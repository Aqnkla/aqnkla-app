import { SvgGalleryHelper } from './../../../../helpers/svg/svg-gallery.helper';
import { SvgIcon } from './../../../../helpers/svg/svg.icon';
import { MenuGroup } from './../../models/menu.model';

export class TopMenuHelper {

  static getTopMenu(): MenuGroup[] {
    const groups = [];
    groups.push(this.getDiaryMenu());
    groups.push(this.getReciptMenu());
    groups.push(this.getIngredientsMenu());
    return groups;
  }

  private static getDiaryMenu(): MenuGroup {
    const group = {
      rootItem: {
        label: 'Diary',
        link: 'diary',
        svgPath: SvgGalleryHelper.getIcon(SvgIcon.diary)
      },
      subItems: [{
        label: 'Week',
        link: 'week',
        svgPath: SvgGalleryHelper.getIcon(SvgIcon.week)
      }, {
        label: 'Day',
        link: 'day',
        svgPath: SvgGalleryHelper.getIcon(SvgIcon.day)
      }, {
        label: 'Manage',
        link: 'manage',
        svgPath: SvgGalleryHelper.getIcon(SvgIcon.manage)
      }]
    };
    return group;
  }

  private static getReciptMenu(): MenuGroup {
    const group = {
      rootItem: {
        label: 'Recipt',
        link: 'recipt',
        svgPath: SvgGalleryHelper.getIcon(SvgIcon.recipt)
      },
      subItems: [{
        label: 'Add',
        link: 'add',
        svgPath: SvgGalleryHelper.getIcon(SvgIcon.add)
      }, {
        label: 'List',
        link: 'list',
        svgPath: SvgGalleryHelper.getIcon(SvgIcon.list)
      }, {
        label: 'Search',
        link: 'search',
        svgPath: SvgGalleryHelper.getIcon(SvgIcon.search)
      }]
    };
    return group;
  }

  private static getIngredientsMenu(): MenuGroup {
    const group = {
      rootItem: {
        label: 'Ingredients',
        link: 'ingredients',
        svgPath: SvgGalleryHelper.getIcon(SvgIcon.ingredients)
      },
      subItems: [{
        label: 'Add',
        link: 'add',
        svgPath: SvgGalleryHelper.getIcon(SvgIcon.add)
      }, {
        label: 'List',
        link: 'list',
        svgPath: SvgGalleryHelper.getIcon(SvgIcon.list)
      }, {
        label: 'Search',
        link: 'search',
        svgPath: SvgGalleryHelper.getIcon(SvgIcon.search)
      }]
    };
    return group;
  }
}
