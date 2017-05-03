import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-questionnaire-play',
  templateUrl: './questionnaire-play.component.html',
  styleUrls: ['./questionnaire-play.component.scss']
})
export class QuestionnairePlayComponent implements OnInit {
  qustionnaire;
  constructor(
    public route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.qustionnaire =JSON.parse(params['questionnaire'] ||{});
    })
  }

}
