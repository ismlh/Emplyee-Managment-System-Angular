import { Component, OnInit } from '@angular/core';
import { IEmplyee } from '../../Models/iemplyee';
import { EmployeesServiceService } from '../../Services/employees-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { IparentDepartments } from '../../Models/iparent-departments';
import { DepartmentsServiceService } from '../../Services/departments-service.service';
import { IchildDepartments } from '../../Models/ichild-departments';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule, CommonModule, DatePipe],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent implements OnInit {
  //Employees
  Employees: IEmplyee[] = [] as IEmplyee[];

  //Employee object to bind use it
  Employee: IEmplyee = {} as IEmplyee;

  //Parent Departments Variables
  parentDepartments: IparentDepartments[] = [] as IparentDepartments[];
  selectedParentDepartmentId!: number;

  //Childerns Departments Variables
  childDepartments: IchildDepartments[] = [] as IchildDepartments[];
  selectedChildDepartmentId!: number;

  //to detect if i wont to update or create
  addEditButton: boolean = true;
  updatedId: number = 0;

  constructor(
    private _empSer: EmployeesServiceService,
    private _deptSer: DepartmentsServiceService
  ) {}
  ngOnInit(): void {
    this.getEmployees();
    this.getParentDepartments();
  }

  getEmployees() {
    this._empSer.getAllEmployees().subscribe((res) => {
      this.Employees = res;
    });
  }

  getParentDepartments() {
    this._deptSer.getParentDepartments().subscribe((res) => {
      this.parentDepartments = res.data;
    });
  }

  getChildDepartmentsByParentId(id: number) {
    this._deptSer.getDepartmentsByparentDeptId(id).subscribe((res) => {
      this.childDepartments = res.data;
    });
  }

  // called when parent Departmnes Select change to fill childerns departments select
  chilDepartments() {
    this.getChildDepartmentsByParentId(this.selectedParentDepartmentId);
  }

  //add,delete,update opretions

  //on Employees
  addEditNewEmployee() {
    debugger;
    if (this.addEditButton) {
      this.addEditButton = true;
      this._empSer.addEmployee(this.Employee).subscribe(
        (res) => {
          this.getEmployees();
          alert('added success');
          this.Employee = {} as IEmplyee;
        },
        (err) => {
          alert(err.message);
        }
      );
    } else {
      this._empSer.updateEmployee(this.updatedId, this.Employee).subscribe(
        () => {
          alert('Updated Success');
          this.Employee = {} as IEmplyee;
          this.getEmployees();
        },
        (err) => {
          alert(err);
        }
      );
    }
  }

  updateEmployee(id: number) {
    this.updatedId = id;
    this.addEditButton = false;
    this._empSer.getEmployeeById(id).subscribe((res) => {
      this.Employee = res;
    });
  }

  deleteEmployee(id: number) {
    if (confirm('are you sure')) {
      this._empSer.deleteEmployeeById(id).subscribe(
        (res) => {
          this.getEmployees();
        },
        (err) => {
          alert(err.message);
        }
      );
    }
  }
}
