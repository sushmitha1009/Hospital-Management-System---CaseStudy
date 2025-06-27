import { Routes } from "@angular/router";
import { Login } from "./login/login";
import { Menu } from "./menu/menu";
import { EmployShow } from "./employ-show/employ-show";
import { EmploySearch } from "./employ-search/employ-search";
import { EmployAdd } from "./employ-add/employ-add";
import { EmployDelete } from "./employ-delete/employ-delete";
import { EmployUpdate } from "./employ-update/employ-update";

export const routes: Routes = [
    {path:'',component:Login},
    {path:'menu',component:Menu},
    {path:'menu',component:Menu, children: [
          {path:'employShow',component:EmployShow,outlet:'hexa'},
          {path:'employSearch',component:EmploySearch,outlet:'hexa'},
          {path:'employAdd',component:EmployAdd,outlet:'hexa'},
          {path:'employDelete',component:EmployDelete,outlet:'hexa'},
          {path:'employUpdate',component:EmployUpdate,outlet:'hexa'}
    ]}
];