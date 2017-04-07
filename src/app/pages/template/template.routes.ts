import { Routes, RouterModule }  from '@angular/router';

import { TemplateComponent } from './template.component';
import { TemplateListComponent } from './template-list/template-list.component';
import { TemplateSearchComponent } from './template-search/template-search.component';
import { TemplateHomeComponent } from './template-home/template-home.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,
    children: [
      {path: '',redirectTo:'home',pathMatch:'full'},
      {path: 'home',component:TemplateHomeComponent},
      { path: 'list', component: TemplateListComponent },
      { path: 'search', component: TemplateSearchComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
