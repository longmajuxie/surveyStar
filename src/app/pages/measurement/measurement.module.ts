import { NgModule }      from '@angular/core';

import { CommonModule }  from '@angular/common';

import { routing }       from './measurement.routes';

import { MeasurementComponent } from './measurement.component';



@NgModule({
  imports: [CommonModule, routing],
  declarations: [
        MeasurementComponent,
     ]
})
export class MeasurementModule {
}
