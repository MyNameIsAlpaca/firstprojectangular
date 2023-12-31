import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms'
import { TestComponent } from './prova/test-component/test-component.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { EmployeesComponent } from './features/employees/employees.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, TestComponent, NavbarComponent, EmployeesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
}
