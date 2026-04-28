import { Component, input, SimpleChanges, OnChanges as NgOnChanges } from '@angular/core';

@Component({
  selector: 'app-on-changes',
  imports: [],
  templateUrl: './on-changes.html',
  styleUrl: './on-changes.css',
})
export class OnChanges implements NgOnChanges {
  dynamicText = input<string>('');

  ngOnChanges(changes: SimpleChanges<OnChanges>): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log("=".repeat(30))
    console.log(changes.dynamicText?.currentValue);
  }
}
