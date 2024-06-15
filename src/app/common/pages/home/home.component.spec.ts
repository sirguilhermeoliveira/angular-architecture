import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { Router } from '@angular/router';
import { AuthService } from '@auth/auth.service';
import { HttpService } from '@services/http.service';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { HomeComponent } from './home.component';
import * as PokemonActions from '@store/pokemon/pokemon.actions';
import { ListTasksComponent } from '@components/list-tasks/list-tasks.component';
import { RowComponent } from '@components/global/row/row.component';
import { I18nModule } from '@assets/i18n/i18n.module';
import { CommonModule, AsyncPipe } from '@angular/common';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockAuthService: jasmine.SpyObj<AuthService>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockHttpService: jasmine.SpyObj<HttpService>;
  let store: MockStore;
  const initialState = { pokemon: { pokemonName: '' } };

  beforeEach(async () => {
    mockAuthService = jasmine.createSpyObj('AuthService', ['logout']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockHttpService = jasmine.createSpyObj('HttpService', ['fetchWithHeaders']);

    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        CommonModule,
        AsyncPipe,
        ListTasksComponent,
        RowComponent,
        I18nModule,
        StoreModule.forRoot({})
      ],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: Router, useValue: mockRouter },
        { provide: HttpService, useValue: mockHttpService },
        provideMockStore({ initialState })
      ]
    }).compileComponents();

    store = TestBed.inject(Store) as MockStore;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize formattedValue', () => {
    expect(component.formattedValue).toBe(1234.56);
  });

  it('should call fetchData on ngOnInit', () => {
    spyOn(component, 'fetchData');
    component.ngOnInit();
    expect(component.fetchData).toHaveBeenCalled();
  });

  it('should fetch data and dispatch the setPokemonName action', async () => {
    const pokemon = { name: 'Ditto' };
    mockHttpService.fetchWithHeaders.and.returnValue(Promise.resolve(pokemon));
    const dispatchSpy = spyOn(store, 'dispatch');
    await component.fetchData();
    expect(dispatchSpy).toHaveBeenCalledWith(PokemonActions.setPokemonName({ name: 'Ditto' }));
  });

  it('should handle fetch error', async () => {
    const consoleSpy = spyOn(console, 'error');
    mockHttpService.fetchWithHeaders.and.returnValue(Promise.reject('Error'));
    await component.fetchData();
    expect(consoleSpy).toHaveBeenCalledWith('There has been a problem with your fetch operation:', 'Error');
  });

  it('should logout and navigate to login', () => {
    component.logout();
    expect(mockAuthService.logout).toHaveBeenCalled();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/login']);
  });
});
