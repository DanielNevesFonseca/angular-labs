import { Component, input, OnInit as NgOnInit, signal, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-on-init',
  imports: [],
  templateUrl: './on-init.html',
  styleUrl: './on-init.css',
})
export class OnInit implements NgOnInit {
  dynamicText = input<string>('');
  signalText = signal('Initial Value');

  // Created in the Angular's bootstrap phase 1
  constructor() {}

  // Created at phase 2
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('The components OnInit has all deps loaded...');
    console.log('changed signalText content...');
    console.log('BEFORE --> ', this.signalText());

    this.signalText.set('add value on OnInit...');
    console.log('AFTER --> ', this.signalText());
  }

  ngOnChanges(changes: SimpleChanges<OnInit>): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('='.repeat(30));
    console.log(changes.signalText?.currentValue());
    console.log(this.signalText());
  }
}
