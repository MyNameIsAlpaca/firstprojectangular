import { Routes } from '@angular/router';
import { ProductsComponent } from './features/products/products.component';
import { EmployeesComponent } from './features/employees/employees.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: 'product', component: ProductsComponent
    },
    {
        path: 'employees', component: EmployeesComponent
    }
];
