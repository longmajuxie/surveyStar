import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { PageComponent } from '../widgets/pagination/page.component';
import { emQuestionnaireTypePipe } from '../filters/common.filters';
@NgModule({
    imports: [ 
        CommonModule,
        FormsModule,
    ],
    declarations: [
      PageComponent,
      emQuestionnaireTypePipe
    ],
    providers: [
    ],
    exports: [
      PageComponent,
      emQuestionnaireTypePipe
    ]
})
export class SharedModule {}