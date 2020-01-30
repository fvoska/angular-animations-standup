import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
  data: {
    animationState: 'home',
  },
}, {
  path: 'users',
  loadChildren: () => import('./pages/users/users.module').then((m) => m.UsersModule),
  data: {
    animationState: 'users',
  },
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
