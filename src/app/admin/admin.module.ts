import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { AdminComponent } from './admin.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AdminRoutingModule } from './admin-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { MateriasComponent } from './materias/materias.component';
import { HorariosComponent } from './horarios/horarios.component';



@NgModule({
  declarations: [
    AdminComponent,
    SidenavComponent,
    AlumnosComponent,
    MateriasComponent,
    HorariosComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class AdminModule { }
