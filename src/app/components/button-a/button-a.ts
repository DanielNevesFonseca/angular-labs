import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button-a',
  imports: [],
  templateUrl: './button-a.html',
  styleUrl: './button-a.css',
})
export class ButtonA {
  title = input.required<string>();
  alertMessage = input<string>();

  alertAction() {
    window.alert(this.alertMessage());
  }
}
