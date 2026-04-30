import { Component, inject, OnInit } from '@angular/core';
import { JokeApi } from '../../services/joke-api';

@Component({
  selector: 'app-children-components',
  imports: [],
  templateUrl: './children-components.html',
  styleUrl: './children-components.css',
})
export class ChildrenComponents implements OnInit {
  readonly _jokeApiService = inject(JokeApi);

  ngOnInit(): void {
    this._jokeApiService.fetchRandomJoke();
  }
}
