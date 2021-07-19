import { BaseComponent } from './views/theme/base/base.component';
// Angular
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { Route } from '@angular/compiler/src/core';

const routes: Routes = [
  {path: '', loadChildren: () => import('./views/pages/auth/auth.module').then(m => m.AuthModule)},
  {
    path:'dashboard',
    component:BaseComponent,
    children:[
      {
        path:'',
        loadChildren: () => import('./views/pages/dashboard/dashboard.module').then(m => m.DashboardModule),
      }
      
    ]
  },  
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
];

export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(routes);

@NgModule({
  imports: [routing],
  exports: [RouterModule]
})
export class AppRoutingModule { }
