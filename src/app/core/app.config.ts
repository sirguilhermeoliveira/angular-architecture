import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from 'src/app/app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { IConfig, provideEnvironmentNgxMask } from 'ngx-mask'
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { pokemonReducer } from '@store/pokemon/pokemon.reducer';
import { AuthService } from '@auth/auth.service';
import { AuthGuard } from '@auth/auth.guard';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

export const appConfig: ApplicationConfig = {
  providers: [provideStore({ pokemon: pokemonReducer }), AuthService, AuthGuard,provideZoneChangeDetection({ eventCoalescing: true }), provideHttpClient(withInterceptorsFromDi()), provideEnvironmentNgxMask(maskConfig), provideRouter(routes), provideClientHydration()]
};
