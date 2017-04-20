import { Routes, RouterModule }  from '@angular/router';

import { QuestionnaireComponent } from './questionnaire.component';
import { ModuleWithProviders } from '@angular/core';
import { QuestionnaireListComponent } from './questionnaire-list/questionnaire-list.component';
import { QuestionnaireTemplateListComponent } from './questionnaire-template-list/questionnaire-template-list.component';
import { QuestionnaireCreateComponent } from './questionnaire-create/questionnaire-create.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: QuestionnaireComponent,
    children: [
      { path: '', redirectTo:'list', pathMatch:'full' },
      { path: 'list', component:QuestionnaireListComponent },
      { path: 'templateList', component: QuestionnaireTemplateListComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
