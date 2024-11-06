import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmplyee } from '../Models/iemplyee';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class EmployeesServiceService {
  constructor(private _http: HttpClient) {}

  getAllEmployees(): Observable<IEmplyee[]> {
    return this._http.get<IEmplyee[]>(`${environment.baseUrl}GetAllEmployees`);
  }

  addEmployee(employee: IEmplyee): Observable<IEmplyee> {
    debugger;
    return this._http.post<IEmplyee>(
      `${environment.baseUrl}CreateEmployee`,
      employee
    );
  }

  updateEmployee(id:number,emp:IEmplyee)
  {
    return this._http.put(`${environment.baseUrl}UpdateEmployee/${id}`,emp)
  }

  getEmployeeById(id:number):Observable<IEmplyee>{
    return this._http.get<IEmplyee>(`${environment.baseUrl}GetEmployee/${id}`);
  }

  deleteEmployeeById(id:number):Observable<IEmplyee>{
    return this._http.delete<IEmplyee>(`${environment.baseUrl}DeleteEmployee/${id}`);
  }
}
