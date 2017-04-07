import { NgModule }      from '@angular/core';

import { CommonModule }  from '@angular/common';

import { routing }       from './template.routes';

import { TemplateComponent } from './template.component';
import { TemplateListComponent } from './template-list/template-list.component';
import { TemplateSearchComponent } from './template-search/template-search.component';
import { TemplateHomeComponent } from './template-home/template-home.component';



@NgModule({
  imports: [CommonModule, routing],
  declarations: [
        TemplateComponent,
        TemplateListComponent,
        TemplateSearchComponent,
        TemplateHomeComponent,
     ]
})
export class TemplateModule {
}
