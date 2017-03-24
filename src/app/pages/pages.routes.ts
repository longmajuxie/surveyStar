import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  {
    path: 'signup',
    loadChildren: 'app/pages/signup/signup.module#SignupModule'
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'no-content', pathMatch: 'full' },
      { path: 'no-content', loadChildren: 'app/pages/no-content/no-content.module#NoContentModule' },
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
