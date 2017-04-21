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
 questionGenre={
    0:"单选题",
    1:"下拉选择题",
    2:"多选题",
    3:"单行填空题",
    4:"多行填空题",
    5:"矩阵单选题",
    6:"矩阵多选题",
    7:"图片单选",
    8:"图片多选",
    9:"描述说明",
  }
  constructor() { }

  ngOnInit() {
      
  }
  
  public addQuestion=function(index){
       let question={
                 questionGenre:index, 
                 questionTitle:this.questionGenre[index],
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