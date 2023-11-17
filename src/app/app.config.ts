import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { EmployeesComponent } from './features/employees/employees.component';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
