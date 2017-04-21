import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionnaire-create',
  templateUrl: './questionnaire-create.component.html',
  styleUrls: ['./questionnaire-create.component.scss']
})
export class QuestionnaireCreateComponent implements OnInit {
  
  qustionnaire={
    questionnaireTitle:"问卷名",
    questionnairePrompt:"欢迎参加调查！",
    questionList:[]
  };
  questionGenre={}
  constructor() { }

  ngOnInit() {
      
  }
  
  public addQuestion=function(index){
       let question={
                 questionGenre:index, 
                 questionTitle:"题目名",
                  questionChoice:[
                           {
                                text:"选项内容",
                                isSelected:false
                            }
                   ]
           
              };
       this.qustionnaire.questionList.push(question);
       console.log(this.qustionnaire);
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