import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeCallsService {
  constructor(private http: HttpClient) { }

  getEmployeeData(): Observable<any>{
    return this.http.get('https://localhost:7261/api/AnagraficaGenerica/')
  }

  getEmployeeDataById(Matricola: string): Observable<any>{
    console.log(Matricola)
    return this.http.get('https://localhost:7261/api/AnagraficaGenerica/' + Matricola)
  }
}
