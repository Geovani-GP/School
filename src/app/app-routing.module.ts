import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginmaestroComponent } from './loginmaestro/loginmaestro.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'loginmaestro',
    component: LoginmaestroComponent,
  },
  {
    path: 'Admin', loadChildren: () =>
    import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { path: 'profesor', loadChildren: () => import('./profesor/profesor.module').then(m => m.ProfesorModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
