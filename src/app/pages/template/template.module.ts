import { NgModule }      from '@angular/core';

import { CommonModule }  from '@angular/common';

import { FormsModule,NgForm} from '@angular/forms';
import { routing }       from './template.routes';

import { TemplateComponent } from './template.component';
import { TemplateListComponent } from './template-list/template-list.component';
import { TemplateSearchComponent } from './template-search/template-search.component';
import { TemplateHomeComponent } from './template-home/template-home.component';
import { QuestionnaireService } from '../../services/questionnaire';
import {SharedModule} from "../share.module";






@NgModule({
  imports: [CommonModule,FormsModule,SharedModule, routing],
  declarations: [
        TemplateComponent,
        TemplateListComponent,
        TemplateSearchComponent,
        TemplateHomeComponent
     ],
  providers:[QuestionnaireService]
})
export class TemplateModule {
}
