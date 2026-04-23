import { Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
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
