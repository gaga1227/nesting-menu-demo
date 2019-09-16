import { async, TestBed } from '@angular/core/testing';

import { MenuItemComponent } from './menu-item.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MenusService } from '../../services/menus.service';

describe('MenuItemComponent', () => {
  let component;
  let fixture;
  let menusService;
  let spyDisplayFormEmit;
  let spyDisplayMessageEmit;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MenuItemComponent],
      providers: [MenusService],
      schemas: [NO_ERRORS_SCHEMA] // not to error on unknown elements and attributes
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemComponent);
    component = fixture.componentInstance;
    menusService = TestBed.get(MenusService);

    component.item = {
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
    };

    fixture.detectChanges();
    _assertDefaultStates();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe(`should 'onMenuItemClick()' update state values and emit event when `, () => {
    beforeEach(() => {
      spyDisplayFormEmit = spyOn(menusService.displayForm, 'emit').and.callThrough();
      spyDisplayMessageEmit = spyOn(menusService.displayMessage, 'emit').and.callThrough();
    });

    it(`item.actionIsNull is true`, () => {
      component.item = {
        title: 'test',
        actionIsNull: true
      };

      component.onMenuItemClick();

      expect(spyDisplayFormEmit).toHaveBeenCalledTimes(0);
      expect(spyDisplayMessageEmit).toHaveBeenCalledTimes(1);
      _assertStates(false, false, true);
    });

    it(`item.actionIsForm is true`, () => {
      component.item = {
        title: 'test',
        actionIsForm: true
      };

      component.onMenuItemClick();

      expect(spyDisplayFormEmit).toHaveBeenCalledTimes(1);
      expect(spyDisplayMessageEmit).toHaveBeenCalledTimes(0);
      _assertStates(false, true, false);
    });

    it(`item.actionIsSubmenu is true with submenu data`, () => {
      component.item = {
        title: 'test',
        actionIsSubmenu: true,
        submenuData: [{}]
      };

      component.onMenuItemClick();

      expect(spyDisplayFormEmit).toHaveBeenCalledTimes(0);
      expect(spyDisplayMessageEmit).toHaveBeenCalledTimes(0);
      _assertStates(true, false, false);
    });

    it(`item.actionIsSubmenu is true without submenu data`, () => {
      component.item = {
        title: 'test',
        actionIsSubmenu: true,
        submenuData: null
      };

      component.onMenuItemClick();

      expect(spyDisplayFormEmit).toHaveBeenCalledTimes(0);
      expect(spyDisplayMessageEmit).toHaveBeenCalledTimes(0);
      _assertDefaultStates();
    });
  });

  // util
  function _assertDefaultStates() {
    _assertStates(false, false, false);
  }

  function _assertStates(
    displaySubmenu: boolean,
    displayForm: boolean,
    displayNoAction: boolean) {

    expect(component.displaySubmenu).toBe(displaySubmenu);
    expect(component.displayForm).toBe(displayForm);
    expect(component.displayNoAction).toBe(displayNoAction);
  }

});
