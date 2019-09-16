import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MenusService } from './services/menus.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  let fixture;
  let component;
  let menusService;
  let spyGetMenu;
  let spyDisplayFormSubscribe;
  let spyDisplayMessageSubscribe;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        MenusService
      ],
      schemas: [NO_ERRORS_SCHEMA] // not to error on unknown elements and attributes
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    menusService = TestBed.get(MenusService);

    _assertDefaultStates();
    fixture.detectChanges();
    _assertStates(6, false, false);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  describe(`should 'onNgInit()' `, () => {
    beforeEach(() => {
      spyGetMenu = spyOn(menusService, 'getMenu').and.callThrough();
      spyDisplayFormSubscribe = spyOn(menusService.displayForm, 'subscribe').and.callThrough();
      spyDisplayMessageSubscribe = spyOn(menusService.displayMessage, 'subscribe').and.callThrough();

      component.ngOnInit();
    });

    it(`get menus data from menus service`, () => {
      expect(spyGetMenu).toHaveBeenCalledTimes(1);
      expect(spyDisplayFormSubscribe).toHaveBeenCalledTimes(1);
      expect(spyDisplayMessageSubscribe).toHaveBeenCalledTimes(1);
    });

    it(`subscribe to eventEmitters from menus service`, () => {
      expect(spyGetMenu).toHaveBeenCalledTimes(1);
      expect(spyDisplayFormSubscribe).toHaveBeenCalledTimes(1);
      expect(spyDisplayMessageSubscribe).toHaveBeenCalledTimes(1);
    });
  });

  it(`should 'menusService.displayForm' show form`, () => {
    menusService.displayForm.emit();
    _assertStates(6, true, false);
  });

  it(`should 'menusService.displayMessage' show message`, () => {
    menusService.displayMessage.emit();
    _assertStates(6, false, true);
  });

  it(`should 'onFormCancelClick()' hide form`, () => {
    component.onFormCancelClick();
    _assertStates(6, false, false);
  });

  // util
  function _assertDefaultStates() {
    _assertStates(0, false, false);
  }

  function _assertStates(
    menusLength: number,
    displayForm: boolean,
    displayMessage: boolean) {

    expect(component.menus).toBeTruthy();
    expect(component.menus.length).toBe(menusLength);
    expect(component.displayForm).toBe(displayForm);
    expect(component.displayMessage).toBe(displayMessage);
  }

});
