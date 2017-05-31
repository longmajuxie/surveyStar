import { Routes, RouterModule }  from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard } from '../services/guard.service';
import { Pages } from './pages.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { HomeComponent } from './home/home.component';
import { TemplateDetailComponent } from './template/template-detail/template-detail.component';
import { TopicCreateComponent } from './template/topic-create/topic-create.component';
import { TemplateCreateOrEditComponent } from './template/template-create-or-edit/template-create-or-edit.component';
import { QuestionnairePlayComponent } from './questionnaire/questionnaire-play/questionnaire-play.component';
import { TemplatePlayComponent } from './template/template-play/template-play.component'
'./service/ga'

// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component:HomeComponent },
      { path: 'topic-discussion', loadChildren: 'app/pages/topic-discussion/topic-discussion.module#TopicDiscussionModule' },   
      { 
        canActivate: [AuthGuard],
        path: 'questionnaire', 
        loadChildren: 'app/pages/questionnaire/questionnaire.module#QuestionnaireModule' 
      },
      { path: 'report', loadChildren: 'app/pages/report/report.module#ReportModule' },
      { path: 'template', loadChildren: 'app/pages/template/template.module#TemplateModule' },
      { path: 'measurement', loadChildren: 'app/pages/measurement/measurement.module#MeasurementModule' },
      { path: 'template/detail/:id', component: TemplateDetailComponent},
      {
         canActivate: [AuthGuard],
         path: 'template/play/:id', 
         component: TemplatePlayComponent
        },
       { path: 'template/create', component: TopicCreateComponent },
      { path: 'template/createOrEdit', component: TemplateCreateOrEditComponent },
       { path: 'questionnaire/previewOrPlay', component:QuestionnairePlayComponent },
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
