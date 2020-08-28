import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { MateriasComponent } from './materias/materias.component';
import { HorariosComponent } from './horarios/horarios.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'Menu',
      },
      {
        path: 'Alumnos', component: AlumnosComponent
      },
      {
        path: 'Materias', component: MateriasComponent
      },
      {
        path: 'Horarios', component: HorariosComponent
      },

    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
