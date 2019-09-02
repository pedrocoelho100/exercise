import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { HeaderComponent } from '../header/header.component';
import { UserDetailsComponent } from '../user-details/user-details.component';

import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { BarChartModule } from '@swimlane/ngx-charts';
import { BreadcrumbModule } from 'angular-crumbs';

@NgModule({
  declarations: [
    HeaderComponent,
    UserListComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    MatInputModule,
    BarChartModule,
    BreadcrumbModule
  ]
})
export class UserModule { }
