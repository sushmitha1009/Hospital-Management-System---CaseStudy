import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployShow } from './employ-show/employ-show';
import { EmploySearch } from './employ-search/employ-search';
import { EmployAdd } from './employ-add/employ-add';
import { EmployDelete } from './employ-delete/employ-delete';
import { EmployUpdate } from './employ-update/employ-update';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,EmployShow,EmploySearch, EmployAdd,
    EmployDelete, EmployUpdate],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'EmployService';
}
