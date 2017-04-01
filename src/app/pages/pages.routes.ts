import { Routes, RouterModule }  from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard } from '../services/guard.service';
import { Pages } from './pages.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { HomeComponent } from './home/home.component';
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
      { path: 'questionnaire', loadChildren: 'app/pages/questionnaire/questionnaire.module#QuestionnaireModule' },
      { path: 'report', loadChildren: 'app/pages/report/report.module#ReportModule' },
      { path: 'template', loadChildren: 'app/pages/template/template.module#TemplateModule' },
      { path: 'measurement', loadChildren: 'app/pages/measurement/measurement.module#MeasurementModule' }
      // { path: 'no-content', loadChildren: 'app/pages/no-content/no-content.module#NoContentModule' },
    //   { path: 'editors', loadChildren: 'app/pages/editors/editors.module#EditorsModule' },
    //   { path: 'components', loadChildren: 'app/pages/components/components.module#ComponentsModule' },
    //   { path: 'charts', loadChildren: 'app/pages/charts/charts.module#ChartsModule' },
    //   { path: 'ui', loadChildren: 'app/pages/ui/ui.module#UiModule' },
    //   { path: 'forms', loadChildren: 'app/pages/forms/forms.module#FormsModule' },
    //   { path: 'tables', loadChildren: 'app/pages/tables/tables.module#TablesModule' },
    //   { path: 'maps', loadChildren: 'app/pages/maps/maps.module#MapsModule' }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
