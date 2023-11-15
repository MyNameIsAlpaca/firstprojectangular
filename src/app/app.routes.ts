import { Routes } from '@angular/router';
import { ProductsComponent } from './features/products/products.component';
import { EmployeesComponent } from './features/employees/employees.component';

export const routes: Routes = [
    {
        path: 'product', component: ProductsComponent
    },
    {
        path: 'employees', component: EmployeesComponent
    },
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    }
];
