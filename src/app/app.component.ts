import { Component, OnInit } from '@angular/core';
import { MenusService } from './services/menus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  menus = [];
  displayForm = false;
  displayMessage = false;

  constructor(private menusService: MenusService) {
  }

  ngOnInit() {
    this.menus = this.menusService.getMenu();
    this.menusService.displayForm
      .subscribe(() => {
        this.displayForm = true;
        this.displayMessage = false;
      });
    this.menusService.displayMessage
      .subscribe(() => {
        this.displayForm = false;
        this.displayMessage = true;
      });
  }

  onFormCancelClick() {
    this.displayForm = false;
  }
}
