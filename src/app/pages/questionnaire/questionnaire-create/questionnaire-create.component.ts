import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import { QuestionnaireDelService } from './questionnaire-create.service';

@Component({
  selector: 'app-questionnaire-create',
  templateUrl: './questionnaire-create.component.html',
  styleUrls: ['./questionnaire-create.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class QuestionnaireCreateComponent implements OnInit {
  
  qustionnaire={
    questionnaireTitle:"问卷名",
    questionnairePrompt:"欢迎参加调查！",
    questionList:[]
  };
  constructor(public del:QuestionnaireDelService) { }

  ngOnInit() {
      
  }
  
  public addQuestion=function(index){
       let question={};
       question=this.del.createQuestionnaireQuestion(index);
       this.qustionnaire.questionList.push(question);
       console.log(this.qustionnaire);
  }

  public questionDelete=function(index){
    this.qustionnaire.questionList.splice(index,1);
  }
  
}

/*
{
    questionnaireTitle:"问卷名",
    questionnairePrompt:"欢迎参加调查！",
    questionList:[
             {
                 questionGenre:0, 
                 questionTitle:"题目名",
                  questionChoice:[
                           {
                                text:"选项内容",
                                isSelected:false
                            }
                   ]
           
              }
     ]
}
*/