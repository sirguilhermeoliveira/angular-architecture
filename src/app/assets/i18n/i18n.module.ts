import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [TranslateModule]
})
export class I18nModule {
    constructor(private translate: TranslateService) {
      const browserLang = this.getBrowserLanguage();
  
      this.translate.use(RegExp(/en|pt/).exec(browserLang) ? browserLang : 'en');
    }
  
    getBrowserLanguage(): string {
      if (typeof window !== 'undefined' && window.navigator) {
        return navigator.language.split('-')[0];
      }
      return 'en'; 
    }
  
    switchLanguage(language: string) {
      this.translate.use(language);
    }
  }