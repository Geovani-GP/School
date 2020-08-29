import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfesorComponent } from './profesor.component';

const routes: Routes = [

  {
    path: '',
    component: ProfesorComponent,
    children: [
      {
        path: 'Menu',
      }
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesorRoutingModule { }
