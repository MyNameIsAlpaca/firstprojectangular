import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../../app.employee'
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-test-component',
  standalone: true,
  imports: [CommonModule, AppComponent],
  templateUrl: './test-component.component.html',
  styleUrl: './test-component.component.scss'
})
export class TestComponent {
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
