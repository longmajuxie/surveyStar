import { Routes, RouterModule }  from '@angular/router';

import { MeasurementComponent } from './measurement.component';
import { ModuleWithProviders } from '@angular/core';

import { MeasurementListComponent } from './measurement-list/measurement-list.component';
import { MeasurementDetailComponent } from './measurement-detail/measurement-detail.component'

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: MeasurementComponent,
    children: [
      { path: '', redirectTo:'list', pathMatch:'full' },
      { path: 'list', component:MeasurementListComponent },
      { path: 'detail', component: MeasurementDetailComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
