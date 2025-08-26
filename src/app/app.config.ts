import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core'
import { provideRouter } from '@angular/router'
import { routes } from './app.routes'
import { registerLocaleData } from '@angular/common'
import localeFr from '@angular/common/locales/fr'

registerLocaleData(localeFr, 'fr')

export const appConfig: ApplicationConfig = {
  providers: [provideZonelessChangeDetection(), provideRouter(routes)]
}
