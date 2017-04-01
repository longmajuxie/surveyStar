import { NgModule }      from '@angular/core';

import { CommonModule }  from '@angular/common';

import { routing }       from './report.routes';

import { ReportComponent } from './report.component';



@NgModule({
  imports: [CommonModule, routing],
  declarations: [
        ReportComponent,
     ]
})
export class ReportModule {
}
