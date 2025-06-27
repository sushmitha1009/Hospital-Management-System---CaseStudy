import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EmployService } from '../employ-service';
import { Employ } from '../employ';

@Component({
  selector: 'app-employ-update',
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './employ-update.html',
  styleUrl: './employ-update.css'
})
export class EmployUpdate {
   eno : number;
    nam : string;
    gen : string;
    dpt : string;
    dsg : string;
    bas :number; 
  
    employ : Employ;
  
    constructor(private _employService : EmployService) {}
  
    updateEmploy() {
      this.employ = new Employ();
      this.employ.empno = this.eno;
      this.employ.name = this.nam;
      this.employ.gender = this.gen;
      this.employ.dept = this.dpt;
      this.employ.desig = this.dsg;
      this.employ.basic = this.bas;
  
      this._employService.updateEmploy(this.employ).subscribe(x => {
        alert(x);
      })
    }

}
