import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DestroyRef,
  DoCheck,
  ElementRef,
  inject,
  OnChanges,
  OnDestroy,
  OnInit,
  signal,
  SimpleChanges,
  TemplateRef,
  viewChild,
  ViewChild,
  WritableSignal,
} from '@angular/core';
import { ContentChild } from '../content-child/content-child';
import { Tab } from '../tab/tab';
import { OnChanges as OnChangesComponent } from '../on-changes/on-changes';
import { OnInit as NgOnInit } from '../on-init/on-init';
import { ChildrenComponents } from '../children-components/children-components';

@Component({
  selector: 'app-test',
  imports: [ContentChild, Tab, OnChangesComponent, NgOnInit, ChildrenComponents],
  templateUrl: './test.html',
  styleUrl: './test.css',
})
export class Test
  implements
    OnInit,
    OnChanges,
    OnDestroy,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  private _destroyRef = inject(DestroyRef);
  readonly textInput: WritableSignal<string> = signal<string>('Some Text Here!');

  @ViewChild('TemplateVariable1') templateVariable1Ef!: ElementRef<HTMLInputElement>;

  appChildrenTemplateRef = viewChild(ChildrenComponents);

  constructor() {
    this._destroyRef.onDestroy(() => {
      console.log('This component was destroyed!!!!');
    });
  }

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

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log('AQUI ----- !');
    const jokeRetrievedParent = this.appChildrenTemplateRef()?._jokeApiService.joke();
    console.log('This joke was retrieved from PARENT: ', jokeRetrievedParent);
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
  }

  setSignal(event: Event) {
    this.textInput.set((event.target as HTMLInputElement).value as string);
  }

  changeInputValue(value: string) {
    this.inputValue.set(value);
  }

  inputValue = signal<string>('');
}
