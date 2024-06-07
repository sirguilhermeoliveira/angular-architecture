import { Component, Injectable  } from '@angular/core';
import { ListTasksComponent } from '@components/list-tasks/list-tasks.component';
import { RowComponent } from '@components/global/row/row.component';
import { NumberUtils } from '@utils/number-utils';
import { HttpService } from '@services/http.service';
import { I18nModule } from '@assets/i18n/i18n.module';
import * as PokemonActions from '@store/pokemon/pokemon.actions'; 
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';

interface Pokemon {
  name: string;
}

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-home',
  imports: [ListTasksComponent, RowComponent, I18nModule, AsyncPipe],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  pokemonName$!: Observable<string>;
  subscription: Subscription | undefined;
  formattedValue: string;

  constructor(private numberUtils: NumberUtils, private httpService: HttpService, private store: Store<{ pokemon: { pokemonName: string } }>) {
    const value = 1234.56; 
    this.formattedValue = this.numberUtils.parseToCurrency(value);
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.httpService.fetchWithHeaders('pokemon/ditto')
      .then(pokemon => {
        this.store.dispatch(PokemonActions.setPokemonName({ name: pokemon.name }));
        this.pokemonName$ = this.store.pipe(select(state => state.pokemon.pokemonName));
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  

}
}