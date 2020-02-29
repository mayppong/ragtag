import MenuItem from './menu-item';

class Menu extends Phaser.GameObjects.Container {
  menuItems: MenuItem[] = [];
  selectedItemIndex: number = 0

  constructor(scene: Phaser.Scene, x: number, y: number, menuItems?: MenuItem[]) {
    super(scene, x, y);
    if (menuItems) {
      this.menuItems = menuItems;
    }
  }

  addMenuItem(item: string) {
    let menuItem = new MenuItem(this.scene, 10, this.menuItems.length * 20, item);
    this.menuItems.push(menuItem);
    this.add(menuItem);
  }

}

export default Menu;