import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button-b',
  imports: [],
  templateUrl: './button-b.html',
  styleUrl: './button-b.css',
})
export class ButtonB {
  title = input.required<string>();
  alertMessage = input<string>();

  alertAction() {
    window.alert(this.alertMessage());
  }
}
