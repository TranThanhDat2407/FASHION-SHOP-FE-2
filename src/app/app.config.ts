import { ApplicationConfig, provideZoneChangeDetection,Provider } from '@angular/core';
import {provideRouter, RouterModule} from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {provideHttpClient, withFetch, withInterceptorsFromDi} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { importProvidersFrom } from '@angular/core';
import {adminRoutes} from './components/admin/admin-routes';
// import { adminRoutes } from './components/admin/admin-routes';

const tokenInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: TokenInterceptor,
  multi: true,
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(RouterModule.forChild(adminRoutes)),
    provideClientHydration(),
    provideHttpClient(withFetch(), withInterceptorsFromDi()),
    tokenInterceptorProvider,
  ]
};
