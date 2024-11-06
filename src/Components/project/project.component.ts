import { IProject } from './../../Models/iproject';
import { Component, OnInit } from '@angular/core';
import { PrpjectsServiceService } from '../../Services/prpjects-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IEmplyee } from '../../Models/iemplyee';
import { EmployeesServiceService } from '../../Services/employees-service.service';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent implements OnInit {
  Projects: IProject[] = [] as IProject[];

  Emplyees: IEmplyee[] = [] as IEmplyee[];

  // project use it to bind data
  projectObj: IProject = {} as IProject;

  // use this var to detect i add or update
  addEditButton: boolean = true;

  constructor(
    private _projSer: PrpjectsServiceService,
    private _empSer: EmployeesServiceService
  ) {}
  ngOnInit(): void {
    this.getProjects();
    this.getEmployees();
  }

  getEmployees() {
    this._empSer.getAllEmployees().subscribe(
      (res) => {
        this.Emplyees = res;
      },
      (err) => {
        alert(err);
      }
    );
  }

  getProjects() {
    this._projSer.getAllProducts().subscribe(
      (res) => {
        this.Projects = res;
      },
      (err) => {
        alert(err);
      }
    );
  }

  addProject() {
    if (this.addEditButton) {
      this._projSer.addProject(this.projectObj).subscribe(
        () => {
          alert('added Succesfully');
          this.getProjects();
          this.projectObj = {} as IProject;
        },
        (err) => {
          alert(err.message);
        }
      );
    }
    else{
      this._projSer.updateProject(this.projectObj.projectId,this.projectObj).subscribe(()=>{
        alert("updated successfully");
        this.projectObj={} as IProject;
        this.getProjects();
        this.addEditButton=true;

      })
    }
  }

  updateProject(id: number) {
    this.addEditButton = false;
    this._projSer.getProjectById(id).subscribe(
      (res) => {
        this.projectObj = res;
      },
      () => {
        alert('Not Founded');
      }
    );
  }

  deleteProject(id: number) {
    let confirmDelete = confirm('Are You Sure');
    if (confirmDelete) {
      this._projSer.deleteProject(id).subscribe(
        () => {
          alert('deleted Succefully');
          this.getProjects();
        },
        (err) => {
          alert(err.message);
        }
      );
    }
  }
}
