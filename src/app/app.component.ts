import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms'
import { Employee } from './app.employee'
import { EmployeesComponent } from './features/employees/employees.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, EmployeesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Progettino angularae';
  ics = 'ciao';
  abc: string = '';
  disabledTest: boolean = true;
  testBinding: string = '';
  testTitle = '';
  testStyle = {color: 'green'};
  testClass = 'backgroundRed';
  isOK = true;
  empList: any[] = [];
  num1: number = 12.3;
  today = new Date();

  movieList: any[] = [
    {
      title: "Fight club",
      year: 1999,
      type: "drama",
    },
    {
      title: "Donnie darko",
      year: 2001,
      type: "triller",
    },
    {
      title: "Shutter Island",
      year: 2001,
      type: "triller",
    },
    {
      title: "Titanic",
      year: 2001,
      type: "drama",
    },
    {
      title: "Ex",
      year: 2001,
      type: "horror",
    }
  ]

  bidirezionale: string = 'ciao';

  constructor() {}
  updateTitle(){
    console.log("Prova")
    this.testTitle = this.testBinding
    this.disabledTest = !this.disabledTest;
    if(this.testStyle.color == 'red'){
      this.testStyle = {color: 'green'};
    } else{
      this.testStyle = {color: 'red'};
    }
    if(this.testClass == 'backgroundRed'){
      this.testClass = 'backgroundGreen'
    } else{
      this.testClass = 'backgroundRed'
    }
  }

  InsertEmployee()
  {
    let emp = new Employee('K001', 'Gabriele Saragosa', 'Lanzada', 'Via fellaria 223')

    this.empList.push(emp)
  }
}
