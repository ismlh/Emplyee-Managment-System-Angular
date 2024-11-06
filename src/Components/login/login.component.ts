import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private _router:Router,private _auth:AuthService){

  }
  loginObj={
    userName:"",
    password:""
  }

  Login(){
    this._auth.login(this.loginObj.userName);
    this._router.navigateByUrl('dashboard');
  }


}
