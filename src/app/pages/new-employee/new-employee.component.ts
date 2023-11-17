import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-employee.component.html',
  styleUrl: './new-employee.component.scss'
})
export class NewEmployeeComponent {

  newEmp: NewEmployee = new NewEmployee('','')

  newEmps: any[] = [];

InsertData(matricola: HTMLInputElement, nominativo: HTMLInputElement)
{
  console.log(matricola.value)
  console.log(nominativo.value)
  
  this.newEmp.enrollment = matricola.value
  this.newEmp.name = nominativo.value
  
  this.newEmps.push(new NewEmployee(matricola.value, nominativo.value))

  console.log(this.newEmps)
}

insertSingleInput(ev: Event)
{
  console.log((ev.target as HTMLInputElement).value);

}

InsertDataForm()
{
}
}

export class NewEmployee{
  enrollment: string
  name: string


  constructor(enrollment: string, name: string){
    this.enrollment = enrollment
    this.name = name
  }
}