import {
  Component,
  ElementRef,
  OnInit,
  signal,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  WritableSignal,
} from '@angular/core';
import { ContentChild } from '../content-child/content-child';
import { Tab } from '../tab/tab';

@Component({
  selector: 'app-test',
  imports: [ContentChild, Tab],
  templateUrl: './test.html',
  styleUrl: './test.css',
})
export class Test implements OnInit {
  readonly textInput: WritableSignal<string> = signal<string>('Some Text Here!');

  @ViewChild('TemplateVariable1') templateVariable1Ef!: ElementRef<HTMLInputElement>;

  // Uso de ViewChild para manipular o DOM de um elemento dentro desse componente
  changeTV1() {
    this.templateVariable1Ef.nativeElement.value = 'This is the new value!';
    this.templateVariable1Ef.nativeElement.classList = ' border border-blue-500';
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  ngOnChanges(changes: SimpleChanges<Test>): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (changes.textInput) {
      console.log(`Previous: ${changes.textInput.previousValue}`);
      console.log(`Current: ${changes.textInput.currentValue}`);
      console.log(`Is First: ${changes.textInput.firstChange}`);
    }
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    
  }

  setSignal(event: Event) {
    this.textInput.set((event.target as HTMLInputElement).value as string);
  }
}
