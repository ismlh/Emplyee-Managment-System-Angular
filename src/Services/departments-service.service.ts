import { IparentDepartments, IparentDepartmentsResponse } from './../Models/iparent-departments';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';
import { IchildDepartmentsResponse } from '../Models/ichild-departments';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsServiceService {


  constructor(private _http:HttpClient) { }
  getParentDepartments():Observable<IparentDepartmentsResponse>{
    return this._http.get<IparentDepartmentsResponse>(`${environment.baseUrl}GetParentDepartment`)
  }

  getDepartmentsByparentDeptId(id:number):Observable<IchildDepartmentsResponse>{
    return this._http.get<IchildDepartmentsResponse>(`${environment.baseUrl}GetChildDepartmentByParentId?deptId=${id}`);
  }
  

}
