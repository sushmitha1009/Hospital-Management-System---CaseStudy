import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Employ } from '../employ';
import { EmployService } from '../employ-service';

@Component({
  selector: 'app-employ-show',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './employ-show.html',
  styleUrl: './employ-show.css'
})
export class EmployShow {

  employs : Employ[];

  constructor(private _employService : EmployService) {
    this._employService.showEmploy().subscribe(x => {
      this.employs = x;
    })
  }
}
