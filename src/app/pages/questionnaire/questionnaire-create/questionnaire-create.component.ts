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

  public addQuestionChoice(index){
              if(index==0||index==1||index==2){
                 this.qustionnaire.questionList[index].questionChoice.push(
                      {
                          text:"选项内容"+(this.qustionnaire.questionList[index].questionChoice.length+1),
                          isSelected:false
                      }
                );
              }
              else if(index==3||index==4||index==9){
                 this.qustionnaire.questionList[index].questionChoice.push( {
                                text:"",
                                isSelected:false
                            },);
              }
              else if(index==5||index==6){
                 this.qustionnaire.questionList[index].questionChoice.push(
                    {
                        line:"",
                        choice:[
                            {
                                text:"选项内容1",
                                isSelected:false
                            },
                            {
                                text:"选项内容2",
                                isSelected:false
                            },
                            {
                                text:"选项内容3",
                                isSelected:false
                            },
                        ]
                    },
                     {
                        line:"矩阵行1",
                        choice:[
                            {
                                text:"选项内容1",
                                isSelected:false
                            },
                            {
                                text:"选项内容2",
                                isSelected:false
                            },
                            {
                                text:"选项内容3",
                                isSelected:false
                            },
                        ]
                    },
                     {
                        line:"矩阵行2",
                        choice:[
                            {
                                text:"选项内容1",
                                isSelected:false
                            },
                            {
                                text:"选项内容2",
                                isSelected:false
                            },
                            {
                                text:"选项内容3",
                                isSelected:false
                            },
                        ]
                    }
                );
              }
              else if(index==7||index==8){
                 this.qustionnaire.questionList[index].questionChoice.push();
              }
  }
  
  public deleteQuestionChoice(qindex,cindex){
      this.qustionnaire.questionList[qindex].questionChoice.splice(cindex,1);
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