import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  displayForm = new EventEmitter();
  displayMessage = new EventEmitter();

  private readonly MOCK_MENU_DATA = [
    {
      title: 'Nested Menu ',
      actionIsSubmenu: true,
      submenuData: [
        {
          title: 'Nested Menu ',
          actionIsSubmenu: true,
          submenuData: [
            {
              title: 'Form',
              actionIsForm: true
            },
            {
              title: 'Not Implemented',
              actionIsNull: true
            }
          ]
        },
        {
          title: 'Form',
          actionIsForm: true
        },
        {
          title: 'Not Implemented',
          actionIsNull: true
        }
      ]
    },
    {
      title: 'Form',
      actionIsForm: true
    },
    {
      title: 'Not Implemented',
      actionIsNull: true
    },
    {
      title: 'Nested Menu',
      actionIsSubmenu: true,
      submenuData: [
        {
          title: 'Form',
          actionIsForm: true
        },
        {
          title: 'Not Implemented',
          actionIsNull: true
        }
      ]
    },
    {
      title: 'Form',
      actionIsForm: true
    },
    {
      title: 'Not Implemented',
      actionIsNull: true
    }
  ];

  public getMenu(): {}[] {
    return this.MOCK_MENU_DATA.slice();
  }
}
