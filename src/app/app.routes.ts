import { Routes } from '@angular/router';
import { ProductsComponent } from './features/products/products.component';
import { EmployeesComponent } from './features/employees/employees.component';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NewEmployeeComponent } from './pages/new-employee/new-employee.component';

export const routes: Routes = [
    {
        path: 'product', component: ProductsComponent
    },
    {
        path: 'employees', component: EmployeesComponent
    },
    {
        path: '', component: HomepageComponent
    },
    {
        path: 'NewEmployee', component: NewEmployeeComponent
    }
];
