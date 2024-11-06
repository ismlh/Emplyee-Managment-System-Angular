import { Routes } from '@angular/router';
import { LoginComponent } from '../Components/login/login.component';
import { DashboardComponent } from '../Components/dashboard/dashboard.component';
import { EmployeeComponent } from '../Components/employee/employee.component';
import { ProjectEmployeeComponent } from '../Components/project-employee/project-employee.component';
import { ProjectComponent } from '../Components/project/project.component';

export const routes: Routes = [
    {path:"",component:LoginComponent},
    {path:"login",component:LoginComponent},
    {path:"dashboard",component:DashboardComponent},
    {path:"employees",component:EmployeeComponent},
    {path:"projects",component:ProjectComponent},
    {path:"Project-Employee",component:ProjectEmployeeComponent}
];
