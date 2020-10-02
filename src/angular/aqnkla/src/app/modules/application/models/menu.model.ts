export class Menu {
  topMenu: MenuGroup[];
  bottomMenu: MenuGroup[];
}

export class MenuGroup {
  rootItem: MenuItem;
  subItems: MenuItem[];
}

export class MenuItem {
  label: string;
  svgPath: string;
  link: string;
}

