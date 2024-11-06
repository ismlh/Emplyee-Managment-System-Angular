import { CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IEmployeeProject } from '../../Models/iemployee-project';
import { PrpjectsEmployeeServiceService } from '../../Services/prpjects-employee-service.service';
import { IEmplyee } from '../../Models/iemplyee';
import { IProject } from '../../Models/iproject';
import { EmployeesServiceService } from '../../Services/employees-service.service';
import { PrpjectsServiceService } from '../../Services/prpjects-service.service';

@Component({
  selector: 'app-project-employee',
  standalone: true,
  imports: [CommonModule, FormsModule, JsonPipe],
  templateUrl: './project-employee.component.html',
  styleUrl: './project-employee.component.css',
})
export class ProjectEmployeeComponent implements OnInit {
  ProjectsEmployees: IEmployeeProject[] = [] as IEmployeeProject[];
  Employees: IEmplyee[] = [] as IEmplyee[];
  Projects: IProject[] = [] as IProject[];

  // obj used to bind data help me in add and update
  projEmpObj: IEmployeeProject = {} as IEmployeeProject;

  // button used to detect i update or create 
  addEditButton:boolean=true;


  constructor(
    private _projEmpServ: PrpjectsEmployeeServiceService,
    private _empSer: EmployeesServiceService,
    private _projSer: PrpjectsServiceService
  ) {}

  ngOnInit(): void {
    this.projEmpObj.isActive = true;
    this.getAllEmployeeProjects();
    this.getAllProjects();
    this.getAllEmployess();
  }

  getAllEmployeeProjects() {
    this._projEmpServ.getAllProjectsEmployee().subscribe(
      (res) => {
        this.ProjectsEmployees = res;
      },
      (err) => {
        alert('something wrong happend');
      }
    );
  }

  getAllEmployess() {
    this._empSer.getAllEmployees().subscribe((res) => {
      this.Employees = res;
    });
  }

  getAllProjects() {
    this._projSer.getAllProducts().subscribe((res) => {
      this.Projects = res;
    });
  }

  AddProjEmp() {
    if(this.addEditButton){
      this._projEmpServ.addProjectEmployee(this.projEmpObj).subscribe(
        () => {
          this.projEmpObj = {} as IEmployeeProject;
        this.projEmpObj.isActive=true;
          this.getAllEmployeeProjects();
          alert('added suceesfully');
        },
        (err) => {
          alert(err.message);
        }
      );
    }
    else{
      this._projEmpServ.updateProjectEmployee(this.projEmpObj.empProjectId,this.projEmpObj).subscribe(()=>{
        this.getAllEmployeeProjects();
        alert('edited suceesfully')
        this.projEmpObj={} as IEmployeeProject;
        this.projEmpObj.isActive=true;
        this.addEditButton=true;
      })
    }
    
  }

  editEmpProj(id:number){
    this.addEditButton=false;
    this._projEmpServ.getProjectEmployee(id).subscribe((res)=>{
      this.projEmpObj=res;
    })
  }

  deleteProjEmp(id: number) {
    if (confirm('Are You Sure')) {
      this._projEmpServ.deleteProjectEmployee(id).subscribe(() => {
        this.getAllEmployeeProjects();
        alert('done');
      });
    }
  }
}
