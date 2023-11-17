import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { EmployeeCallsService } from '../../shared/crudhttp/employee-calls.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-new-employee',
  standalone: true,
  imports: [CommonModule, FormsModule,HttpClientModule],
  templateUrl: './new-employee.component.html',
  styleUrl: './new-employee.component.scss',
  providers: [EmployeeCallsService]
})
export class NewEmployeeComponent {

  newEmp: NewEmployee = new NewEmployee('','')

  newEmps: any[] = [];

  employeesListServer: any[] = [];

  constructor(private wService: EmployeeCallsService) {}

  getEmployeeFromService(){
    this.wService.getEmployeeData().subscribe({
      next: (data: any) => {
        this.employeesListServer = data;
        console.log(this.employeesListServer)
      },
      error: (err: any) => {
        console.log(err)
      }
    });
  }

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

InsertDataForm(formEmployee: NgForm)
{
  this.newEmps.push(new NewEmployee(formEmployee.value.matricola, formEmployee.value.nominativo))
  formEmployee.reset();
  console.log(this.newEmps)
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