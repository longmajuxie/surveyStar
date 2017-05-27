import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { PageComponent } from '../widgets/pagination/page.component';

@NgModule({
    imports: [ 
        CommonModule,
        FormsModule,
    ],
    declarations: [
      PageComponent
    ],
    providers: [
    ],
    exports: [
      PageComponent
    ]
})
export class SharedModule {}