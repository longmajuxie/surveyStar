import { NgModule }      from '@angular/core';

import { CommonModule }  from '@angular/common';

import { routing }       from './template.routes';

import { TemplateComponent } from './template.component';
import { TemplateListComponent } from './template-list/template-list.component';
import { TemplateSearchComponent } from './template-search/template-search.component';
import { TemplateHomeComponent } from './template-home/template-home.component';
import { QuestionnaireService } from '../../services/questionnaire';
import { emQuestionnaireTypePipe } from '../../filters/common.filters';
import {SharedModule} from "../share.module"






@NgModule({
  imports: [CommonModule,SharedModule, routing],
  declarations: [
        TemplateComponent,
        TemplateListComponent,
        TemplateSearchComponent,
        TemplateHomeComponent,
        emQuestionnaireTypePipe
     ],
  providers:[QuestionnaireService]
})
export class TemplateModule {
}
