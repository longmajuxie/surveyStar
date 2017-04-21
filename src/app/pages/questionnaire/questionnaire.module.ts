import { NgModule }      from '@angular/core';

import { CommonModule }  from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { routing }       from './questionnaire.routes';

import { QuestionnaireComponent } from './questionnaire.component';
import { QuestionnaireListComponent } from './questionnaire-list/questionnaire-list.component';
import { QuestionnaireTemplateListComponent } from './questionnaire-template-list/questionnaire-template-list.component';
import { QuestionnaireCreateComponent } from './questionnaire-create/questionnaire-create.component';



@NgModule({
  imports: [CommonModule,FormsModule, routing],
  declarations: [
        QuestionnaireComponent,
        QuestionnaireListComponent,
        QuestionnaireTemplateListComponent,
        QuestionnaireCreateComponent,
     ]
})
export class QuestionnaireModule {
}
