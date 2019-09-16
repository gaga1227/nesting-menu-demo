import { Component, Input } from '@angular/core';
import { MenusService } from '../../services/menus.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {

  @Input() item: any;

  displaySubmenu = false;
  displayForm = false;
  displayNoAction = false;

  constructor(private menusService: MenusService) {
  }

  onMenuItemClick() {
    this.displaySubmenu = false;
    this.displayForm = false;
    this.displayNoAction = false;

    if (this.item.actionIsNull) {
      this.displaySubmenu = false;
      this.displayForm = false;
      this.displayNoAction = true;
      this.menusService.displayMessage.emit();
    } else if (this.item.actionIsForm) {
      this.displaySubmenu = false;
      this.displayForm = true;
      this.displayNoAction = false;
      this.menusService.displayForm.emit();
    } else if (this.item.actionIsSubmenu && this.item.submenuData && this.item.submenuData.length) {
      this.displaySubmenu = true;
      this.displayForm = false;
      this.displayNoAction = false;
    }
  }
}
