import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from '../routes/app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { IConfig, provideEnvironmentNgxMask } from 'ngx-mask'
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideHttpClient(withInterceptorsFromDi()), provideEnvironmentNgxMask(maskConfig), provideRouter(routes), provideClientHydration()]
};
