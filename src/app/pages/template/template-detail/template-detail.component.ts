import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,Params } from '@angular/router';
import { QuestionnaireService } from '../../../services/questionnaire'
import 'rxjs/add/operator/switchMap';
import { Subscription }   from 'rxjs/Subscription';
declare var $: any;

@Component({
  selector: 'app-template-detail',
  templateUrl: './template-detail.component.html',
  styleUrls: ['./template-detail.component.scss']
})
export class TemplateDetailComponent implements OnInit {

  questionnaire;
  questionnaireId;
  constructor(public router:Router,public Qs:QuestionnaireService,private route: ActivatedRoute,) { }
  
  ngOnInit() {
    this.route.params.switchMap((params: Params) =>  this.Qs.getById(+params['id']))
    .subscribe(data => {
      this.questionnaire = JSON.parse(data);
      let this_=this;
       $(document).ready(function(){
           $(".N_view").click(function(event) {
		          $(".reldiv").remove("#describe").remove(".resultbtn").wordExport(this_.questionnaire.questionnaireName);
	        });
      });
    });
  }
  play(){
    this.router.navigate(['/pages/template/play'], { queryParams: { id: this.questionnaire.questionnaireId} });
  }
}
