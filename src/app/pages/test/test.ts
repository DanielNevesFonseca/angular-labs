import { Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { ContentChild } from "../content-child/content-child";
import { Tab } from '../tab/tab';

@Component({
  selector: 'app-test',
  imports: [ContentChild, Tab],
  templateUrl: './test.html',
  styleUrl: './test.css',
})
export class Test {
  @ViewChild('TemplateVariable1') templateVariable1Ef!: ElementRef<HTMLInputElement>

  // Uso de ViewChild para manipular o DOM de um elemento dentro desse componente
  changeTV1() {
    this.templateVariable1Ef.nativeElement.value = "This is the new value!"
    this.templateVariable1Ef.nativeElement.classList = " border border-blue-500"
  }
}
