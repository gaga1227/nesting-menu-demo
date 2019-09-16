import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  let spyFormCancelEmit;
  let spyWindowAlert;
  let spyEventPrevent;

  const event = new Event('event');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    spyFormCancelEmit = spyOn(component.formCancel, 'emit');
    spyWindowAlert = spyOn(window, 'alert');
    spyEventPrevent = spyOn(event, 'preventDefault');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should 'onFormCancel()' emit formCancel event and prevent default event`, () => {
    const result = component.onFormCancel(event);
    expect(spyFormCancelEmit).toHaveBeenCalledTimes(1);
    expect(spyEventPrevent).toHaveBeenCalledTimes(1);
    expect(result).toBe(false);
  });

  it(`should 'onFormSubmit()' call alert and prevent default event`, () => {
    const result = component.onFormSubmit(event);
    expect(spyWindowAlert).toHaveBeenCalledTimes(1);
    expect(spyWindowAlert).toHaveBeenCalledWith('Form is submitted!');
    expect(spyEventPrevent).toHaveBeenCalledTimes(1);
    expect(result).toBe(false);
  });
});
