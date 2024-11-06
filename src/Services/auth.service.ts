import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  behaviourSubject: BehaviorSubject<boolean> = new BehaviorSubject(this.getUserLogged());

  login(s:string){
    localStorage.setItem("Token", s);
    this.behaviourSubject.next(true);
  }
  getUserLogged():boolean{   
    return localStorage.getItem("Token")?true:false;
  }
  logout(){
    localStorage.removeItem("Token");
    this.behaviourSubject.next(false);
  }
  constructor() { }
}
