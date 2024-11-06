import { environment } from './../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDashboard } from '../Models/idashboard';

@Injectable({
  providedIn: 'root'
})
export class DashBoardSerService {

  constructor(private _http:HttpClient) { }
  getDashBoardData():Observable<IDashboard>{
    return this._http.get<IDashboard>(`${environment.baseUrl}GetDashboard`);
  }
}
