import { Component, input, Input, IterableDiffer, IterableDiffers, DoCheck as NgDoCheck } from '@angular/core';

@Component({
  selector: 'app-do-check',
  imports: [],
  templateUrl: './do-check.html',
  styleUrl: './do-check.css',
})
export class DoCheck implements NgDoCheck {
  @Input() tarefas: string[] = [];

  onRemoveItem = input.required<(item: string) => void>()

  private differ: IterableDiffer<string>;
  contadorMudancas = 0;

  constructor(private differs: IterableDiffers) {
    // Inicializamos o 'differ' para monitorar o array
    this.differ = this.differs.find([]).create();
  }

  ngDoCheck() {
    // Verificamos se houve mudanças no conteúdo do array
    const mudancas = this.differ.diff(this.tarefas);

    if (mudancas) {
      console.log('Detectada mudança no conteúdo do array!');
      this.contadorMudancas++;

      mudancas.forEachAddedItem(item => console.log('Adicionado:', item.item));
      mudancas.forEachRemovedItem(item => console.log('Removido:', item.item));
    }
  }


}
