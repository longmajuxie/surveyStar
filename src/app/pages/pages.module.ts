import { NgModule }      from '@angular/core';

import { CommonModule }  from '@angular/common';

import { routing }       from './pages.routes';

import { Pages } from './pages.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { AppFooterComponent } from '../widgets/app-footer/app-footer.component';
import { AppHeaderComponent } from '../widgets/app-header/app-header.component';
import { HomeComponent } from './home/home.component';
import { TemplateDetailComponent } from './template/template-detail/template-detail.component';
import { TopicCreateComponent } from './template/topic-create/topic-create.component';
import { TemplateCreateOrEditComponent } from './template/template-create-or-edit/template-create-or-edit.component';


@NgModule({
  imports: [CommonModule, routing],
  declarations: [
      Pages,
      SignupComponent,
      LoginComponent,
      LayoutsComponent,
      AppFooterComponent,
      AppHeaderComponent,
      HomeComponent,
      TemplateDetailComponent,
      TopicCreateComponent,
      TemplateCreateOrEditComponent
    ]
})
export class PagesModule {
}
