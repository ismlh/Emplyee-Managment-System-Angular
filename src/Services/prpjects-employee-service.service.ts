import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployeeProject } from '../Models/iemployee-project';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PrpjectsEmployeeServiceService {

  constructor(private _http:HttpClient) { }

  getAllProjectsEmployee():Observable<IEmployeeProject[]>{
    return this._http.get<IEmployeeProject[]>(`${environment.baseUrl}GetAllProjectEmployees`);
  }

  getProjectEmployee(id:number):Observable<IEmployeeProject>{
    return this._http.get<IEmployeeProject>(`${environment.baseUrl}GetProjectEmployee/${id}`);
  }

  addProjectEmployee(obj:IEmployeeProject):Observable<IEmployeeProject>{
    return this._http.post<IEmployeeProject>(`${environment.baseUrl}CreateProjectEmployee`,obj);
  }

  updateProjectEmployee(id:number,obj:IEmployeeProject):Observable<IEmployeeProject>
  {
    return this._http.put<IEmployeeProject>(`${environment.baseUrl}UpdateProjectEmployee/${id}`,obj);
  }

  deleteProjectEmployee(id:number){
    return this._http.delete(`${environment.baseUrl}DeleteProjectEmployee/${id}`);
  }

}
