import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-queries',
  imports: [],
  templateUrl: './view-queries.html',
  styleUrl: './view-queries.css',
})
export class ViewQueries {
@ViewChild('TemplateVariable1') templateVariable1Ef!: ElementRef<HTMLInputElement>

  // Uso de ViewChild para manipular o DOM de um elemento dentro desse componente
  changeTV1() {
    this.templateVariable1Ef.nativeElement.value = "This is the new value!"
    this.templateVariable1Ef.nativeElement.classList = " border border-blue-500"
  }
}
