import { NgModule }      from '@angular/core';

import { CommonModule }  from '@angular/common';

import { routing }       from './pages.routes';

import { Pages } from './pages.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [CommonModule, routing],
  declarations: [
      Pages,
      SignupComponent,
      LoginComponent
    ]
})
export class PagesModule {
}
