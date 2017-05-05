import { NgModule }      from '@angular/core';

import { CommonModule }  from '@angular/common';

import { routing }       from './measurement.routes';
import { DatepickerModule } from 'ngx-bootstrap/datepicker';
import { MeasurementComponent } from './measurement.component';
import { measurementService } from '../../services/mock.measurement';
import { MeasurementListComponent } from './measurement-list/measurement-list.component';
import { MeasurementDetailComponent } from './measurement-detail/measurement-detail.component'


@NgModule({
  imports: [CommonModule,DatepickerModule.forRoot(), routing],
  declarations: [
        MeasurementComponent,
        MeasurementListComponent,
        MeasurementDetailComponent,
     ],
  providers:[measurementService]
})
export class MeasurementModule {
}
