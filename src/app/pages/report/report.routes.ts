import { Routes, RouterModule }  from '@angular/router';

import { ReportComponent } from './report.component';
import { ModuleWithProviders } from '@angular/core';
import { ViewComponent } from './view/view.component';
import { HomeComponent } from './home/home.component';
// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: ReportComponent,
    children: [
       { path: '', redirectTo:'home', pathMatch:'full' },
      { path: 'home', component:HomeComponent },
      { path: 'view/:id', component: ViewComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
