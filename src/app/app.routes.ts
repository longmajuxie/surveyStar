import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NoContentComponent } from './pages/no-content/no-content.component'
import { Pages } from './pages/pages.component';

export const routes: Routes = [
  { path: '', loadChildren: 'app/pages/pages.module#PagesModule' },
   { path: '**', component: NoContentComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
