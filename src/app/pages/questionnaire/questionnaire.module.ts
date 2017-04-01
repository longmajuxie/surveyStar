import { NgModule }      from '@angular/core';

import { CommonModule }  from '@angular/common';

import { routing }       from './questionnaire.routes';

import { QuestionnaireComponent } from './questionnaire.component';



@NgModule({
  imports: [CommonModule, routing],
  declarations: [
        QuestionnaireComponent,
     ]
})
export class QuestionnaireModule {
}
