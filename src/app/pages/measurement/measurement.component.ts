import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,Params } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-measurement',
  templateUrl: './measurement.component.html',
  styleUrls: ['./measurement.component.scss']
})
export class MeasurementComponent implements OnInit {
  

  constructor(public router:Router) { }
  
  ngOnInit() {}
  public genreList(genreIndex){
        this.router.navigate(['/pages/measurement/list'], { queryParams: { genre: genreIndex } });
  }
}
