import { NgModule }      from '@angular/core';

import { CommonModule }  from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { routing }       from './report.routes';

import { ReportComponent } from './report.component';
import { QuestionnaireService } from '../../services/questionnaire';
import {SharedModule} from "../share.module";
import { ViewComponent } from './view/view.component';
import { HomeComponent } from './home/home.component';
import { Ng2HighchartsModule } from 'ng2-highcharts';
import { ChartModule } from 'angular2-highcharts';


@NgModule({
  imports: [CommonModule,FormsModule,SharedModule,Ng2HighchartsModule,
    ChartModule.forRoot(require('highcharts')), routing],
  declarations: [
        ReportComponent,
        ViewComponent,
        HomeComponent
     ],
  providers:[QuestionnaireService]
})
export class ReportModule {
}
