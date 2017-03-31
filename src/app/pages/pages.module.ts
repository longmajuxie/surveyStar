import { NgModule }      from '@angular/core';

import { CommonModule }  from '@angular/common';

import { routing }       from './pages.routes';

import { Pages } from './pages.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { TopicDiscussionComponent } from './topic-discussion/topic-discussion.component';
import { TempletComponent } from './templet/templet.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { ReportComponent } from './report/report.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { AppFooterComponent } from '../widgets/app-footer/app-footer.component';
import { AppHeaderComponent } from '../widgets/app-header/app-header.component';


@NgModule({
  imports: [CommonModule, routing],
  declarations: [
      Pages,
      SignupComponent,
      LoginComponent,
      TopicDiscussionComponent,
      TempletComponent,
      QuestionnaireComponent,
      ReportComponent,
      LayoutsComponent,
      AppFooterComponent,
      AppHeaderComponent
    ]
})
export class PagesModule {
}
