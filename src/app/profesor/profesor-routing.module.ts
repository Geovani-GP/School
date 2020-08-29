import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfesorComponent } from './profesor.component';
import { MateriaComponent } from './materia/materia.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [

  {
    path: '',
    component: ProfesorComponent,
    children: [
      {
        path: 'Menu',
      },
      {
        path: 'principal',
        component: PrincipalComponent
      },
      {
        path: 'Materia',
        component: MateriaComponent
      }
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesorRoutingModule { }
