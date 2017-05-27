import { Component, OnInit } from '@angular/core';
import { QuestionnaireService } from '../../../services/questionnaire'
@Component({
  selector: 'app-template-home',
  templateUrl: './template-home.component.html',
  styleUrls: ['./template-home.component.scss']
})
export class TemplateHomeComponent implements OnInit {
  public tabIndex=0;
   questionnaireEntity={
    questionnaireName:"",
    quesState:null
  }
  questionRList;
  questionUlist;
  constructor(public Qs:QuestionnaireService) { }

  ngOnInit() {
      this.initList();
  }
 public changeTab(index){
    this.tabIndex=index;
  }

  private initList(): void {
        this.Qs.getList(this.questionnaireEntity,{page:1,rows:14}).subscribe(
                    // the first argument is a function which runs on success
            data => {
                let  resData=JSON.parse(data);
                if(resData.result=="success"){
                  this.questionRList=resData.questionnaires.slice(0,6);
                  this.questionUlist=resData.questionnaires.slice(6,14);
                }
            },
          // the second argument is a function which runs on error
            err => console.error(err),
      // the third argument is a function which runs on completion
            () => console.log('done loading')
        );
  }
}
