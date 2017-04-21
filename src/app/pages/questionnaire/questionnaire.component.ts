import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {

  constructor(private http:Http) { }

  ngOnInit() {
    /* var newsData = this.http.get('http://localhost:8080/oa_maven/dept/test').map((res:Response) => res.json());
     newsData.subscribe(
             data=> { 
                  console.log(data);
              })*/
  }

}
