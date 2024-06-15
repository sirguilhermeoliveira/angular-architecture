import { Component, Injectable  } from '@angular/core';
import { HttpService } from '@services/http.service';
import { I18nModule } from '@assets/i18n/i18n.module';
import * as PokemonActions from '@store/pokemon/pokemon.actions'; 
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '@auth/auth.service';
import { MainButtonComponent } from '@components/main-button/main-button.component';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-home',
  imports: [ I18nModule, AsyncPipe, CommonModule, MainButtonComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  pokemonName$!: Observable<string>;
  subscription: Subscription | undefined;
  formattedValue: number;

  constructor(private authService: AuthService, private router: Router, private httpService: HttpService, private store: Store<{ pokemon: { pokemonName: string } }>) {
    const value = 1234.56; 
    this.formattedValue = value;
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
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']); 
  }
}