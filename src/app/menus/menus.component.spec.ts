import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusComponent } from './menus.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('MenusComponent', () => {
  let component: MenusComponent;
  let fixture: ComponentFixture<MenusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenusComponent ],
      schemas: [NO_ERRORS_SCHEMA] // not to error on unknown elements and attributes
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
