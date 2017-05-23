import { NgModule }      from '@angular/core';

import { CommonModule }  from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { DragulaModule } from 'ng2-dragula';
import {FileUploadModule} from 'ng2-file-upload';

import { routing }       from './questionnaire.routes';
import { QuestionnaireComponent } from './questionnaire.component';
import { QuestionnaireDelService } from './questionnaire.service';
import { QuestionnaireListComponent } from './questionnaire-list/questionnaire-list.component';
import { QuestionnaireTemplateListComponent } from './questionnaire-template-list/questionnaire-template-list.component';
import { QuestionnaireCreateComponent } from './questionnaire-create/questionnaire-create.component';
import { QuestionHandleComponent } from '../../widgets/question-handle/question-handle.component';
import { QuestionnaireService } from '../../services/questionnaire'
import { PageComponent } from '../../widgets/pagination/page.component';




@NgModule({
  imports: [CommonModule,FormsModule,DragulaModule,FileUploadModule, routing],
  declarations: [
        QuestionnaireComponent,
        QuestionnaireListComponent,
        QuestionnaireTemplateListComponent,
        QuestionnaireCreateComponent,
        QuestionHandleComponent,
        PageComponent
     ],
   providers:[QuestionnaireDelService,QuestionnaireService]
})
export class QuestionnaireModule {
}
