import { NgModule }      from '@angular/core';

import { CommonModule }  from '@angular/common';

import { routing }       from './template.routes';

import { TemplateComponent } from './template.component';



@NgModule({
  imports: [CommonModule, routing],
  declarations: [
        TemplateComponent,
     ]
})
export class TemplateModule {
}
