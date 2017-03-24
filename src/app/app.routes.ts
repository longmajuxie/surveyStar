import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NoContentComponent } from './pages/no-content/no-content.component'

export const routes: Routes = [
   { path: '', redirectTo: 'pages', pathMatch: 'full' },
   { path: '**', redirectTo: 'pages/no-content' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
