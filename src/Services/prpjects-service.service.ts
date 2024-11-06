import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProject } from '../Models/iproject';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PrpjectsServiceService {

  constructor(private _http:HttpClient) { }

  getAllProducts():Observable<IProject[]>{
    return this._http.get<IProject[]>(`${environment.baseUrl}GetAllProjects`)
  }

  getProjectById(id:number):Observable<IProject>{
    return this._http.get<IProject>(`${environment.baseUrl}GetProject/${id}`);
  }

  addProject(obj:IProject):Observable<IProject>{
    return this._http.post<IProject>(`${environment.baseUrl}CreateProject`,obj);
  }

  updateProject(id:number,obj:IProject):Observable<IProject>
  {
    return this._http.put<IProject>(`${environment.baseUrl}UpdateProject/${id}`,obj);
  }

  deleteProject(id:number){
    return this._http.delete(`${environment.baseUrl}DeleteProject/${id}`);
  }
}
