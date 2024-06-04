import { Component, OnInit, Injectable  } from '@angular/core';

interface Pokemon {
  name: string;
}

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  pokemon: Pokemon | undefined;

  ngOnInit(): void {
    this.fetchData();
  }


  fetchData() {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(pokemon => {
        this.pokemon = pokemon.name;

      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }

}
