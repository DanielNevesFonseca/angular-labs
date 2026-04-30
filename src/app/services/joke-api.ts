import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

export interface IJoke {
  type: string;
  setup: string;
  punchline: string;
  id: number;
}

@Injectable({
  providedIn: 'root',
})
export class JokeApi {
  private http = inject(HttpClient);
  private readonly apiUrl = environment.jokeApiUrl;

  // Adotar esse padrão - garante que o valor apenas é setado aqui...
  #joke = signal<IJoke | null>(null);
  readonly joke = this.#joke.asReadonly();

  isLoading = signal<boolean>(false);

  fetchRandomJoke() {
    this.isLoading.set(true);

    this.http.get<IJoke>(this.apiUrl + '/random_joke').subscribe({
      next: (resultData: IJoke) => {
        this.#joke.set(resultData);
      },
      error: (err) => {
        alert('Ocorreu um erro ao buscar uma piada aleatória...');
      },
      complete: () => {
        this.isLoading.set(false);
      },
    });

    // OBSOLETE APPROACH...

    // this.http.get<IJoke>(`${this.apiUrl}/random_joke`).pipe(
    //   tap((data) => {
    //     this.#joke.set(data);
    //     this.isLoading.set(false);
    //   }),
    //   catchError((error: any) => {
    //     alert('Erro ao busca piada...');
    //     this.isLoading.set(false);
    //     return of({});
    //   }),
    // );
  }
}
