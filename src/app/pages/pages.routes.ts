import { Routes, RouterModule }  from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard } from '../services/guard.service';
import { Pages } from './pages.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
'./service/ga'

// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: '',
    component: Pages
  },
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
       { 
         canActivate: [AuthGuard],
         path: '', 
         redirectTo: 'no-content',
          pathMatch: 'full' },
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
