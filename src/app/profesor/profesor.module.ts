import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProfesorRoutingModule } from './profesor-routing.module';
import { ProfesorComponent } from './profesor.component';
import { SidenavComponent } from './sidenav/sidenav.component';


@NgModule({
  declarations: [
    ProfesorComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    ProfesorRoutingModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class ProfesorModule { }
