import { TestBed } from '@angular/core/testing';

import { MenusService } from './menus.service';

describe('DataApiService', () => {
  let service: MenusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(MenusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should 'getMenu()' return menus data`, () => {
    const menusData = service.getMenu();
    expect(menusData).toBeTruthy();
    expect(menusData.length).toBe(6);
  });
});
