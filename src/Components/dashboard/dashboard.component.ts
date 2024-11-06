import { Component, OnInit } from '@angular/core';
import { IDashboard } from '../../Models/idashboard';
import { DashBoardSerService } from '../../Services/dash-board-ser.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  dashboardObj:IDashboard={} as IDashboard;

  constructor(private _dashBardSer:DashBoardSerService){

  }

  ngOnInit(): void {
    this.getDashBoard();
  }

  getDashBoard(){
    return this._dashBardSer.getDashBoardData().subscribe((res)=>{
      this.dashboardObj=res;
    })
  }

}
