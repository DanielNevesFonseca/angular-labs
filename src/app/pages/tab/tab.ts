import { Component, input, model } from '@angular/core';

@Component({
  selector: 'app-tab',
  imports: [],
  templateUrl: './tab.html',
  styleUrl: './tab.css',
})
export class Tab {

  title = input.required<string>();
  active = model(false)
}
