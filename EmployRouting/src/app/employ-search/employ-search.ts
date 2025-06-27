import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Employ } from '../employ';
import { EmployService } from '../employ-service';

@Component({
  selector: 'app-employ-search',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './employ-search.html',
  styleUrl: './employ-search.css'
})
export class EmploySearch {
  eno : number;
  employ : Employ;

  constructor(private _employService : EmployService) {}

  search() {
    this._employService.searchEmploy(this.eno).subscribe(x => {
      this.employ = x;
    })
  }

}
