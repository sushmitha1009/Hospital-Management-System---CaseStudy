import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EmployService } from '../employ-service';

@Component({
  selector: 'app-employ-delete',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './employ-delete.html',
  styleUrl: './employ-delete.css'
})
export class EmployDelete {
  eno : number;

  constructor(private _employService : EmployService ) {} 

  delete() {
    this._employService.deleteEmploy(this.eno).subscribe(x => {
      alert(x);
    })
  }

}
