import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';


const routes: Routes = [
  { path: 'user-list', component: UserListComponent, data: { breadcrumb: 'User-List'} },
  { path: 'user-details', component: UserDetailsComponent, data: { breadcrumb: 'User-Details'} },
  { path: '', redirectTo: 'user-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
