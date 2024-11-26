import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { AreasResolver } from '@Resolvers/Areas/areas.resolver';
import { EmpleadosResolver } from '@Resolvers/Empleados/empleados.resolver';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    loadChildren: () => import('./Components/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./Components/home/home.module').then(m => m.HomeModule),
    canActivate: [authGuard]
  },
  {
    path: 'areas',
    loadChildren: () => import('./Components/areas/areas.module').then(m => m.AreasModule),
    canActivate: [authGuard],
    resolve: {
      areas: AreasResolver
    }
  },
  {
    path: 'empleados',
    loadChildren: () => import('./Components/empleados/empleados.module').then(m => m.EmpleadosModule),
    canActivate: [authGuard],
    resolve: {
      empleados: EmpleadosResolver,
      areas: AreasResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
