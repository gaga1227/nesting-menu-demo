import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  @Output() formCancel = new EventEmitter();

  onFormCancel(event: Event) {
    this.formCancel.emit();
    event.preventDefault();
    return false;
  }

  onFormSubmit(event: Event) {
    window.alert('Form is submitted!');
    event.preventDefault();
    return false;
  }
}
