import { Component, Injectable  } from '@angular/core';
import { ListTasksComponent } from '@components/list-tasks/list-tasks.component';
import { RowComponent } from '@components/global/row/row.component';
import { NumberUtils } from '@utils/number-utils';
import { HttpService } from '@services/http.service';
import { I18nModule } from '@assets/i18n/i18n.module';
import { TranslateService } from '@ngx-translate/core';

interface Pokemon {
  name: string;
}

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-home',
  imports: [ListTasksComponent, RowComponent, I18nModule],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  pokemon: Pokemon | undefined;
  formattedValue: string;

  constructor(private numberUtils: NumberUtils, private httpService: HttpService, private translate: TranslateService) {
    const value = 1234.56; 
    this.formattedValue = this.numberUtils.parseToCurrency(value);

  }



  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.httpService.fetchWithHeaders('pokemon/ditto')
      .then(pokemon => {
        this.pokemon = pokemon.name;
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }

}
