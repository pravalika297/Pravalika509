import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // This is correct here

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes)
  ]
};              
