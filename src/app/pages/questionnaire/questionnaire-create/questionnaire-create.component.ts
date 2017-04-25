import { Component, OnInit ,ViewEncapsulation,HostListener} from '@angular/core';
declare var $: any;
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
  currentHandleQuestion:number;
  isShowHandleDig=false;
<<<<<<< .mine
  currentHandleQuestion:number;
  isShowHandleDig=false;
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
=======
  constructor(public del:QuestionnaireDelService) { }














>>>>>>> .theirs

  ngOnInit() {

  }
   @HostListener("window:scroll", [])
  onWindowScroll() {
    //we'll do some stuff here when the window is scrolled
   if(window.scrollY>200){
          $(".sur-sidebar").addClass("fixed-area");
       }else{
         $(".sur-sidebar").removeClass("fixed-area");
       }
  }
  public addQuestion=function(index){
       let question={};
       question=this.del.createQuestionnaireQuestion(index);
       this.qustionnaire.questionList.push(question);
       window.scrollTo(0, document.body.offsetHeight-1000);
       console.log(this.qustionnaire);
  }
  public questionHandle(index){
      this.currentHandleQuestion=index;
      this.isShowHandleDig=true;
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
<<<<<<< .mine
  public handleConfirm(){
    this.qustionnaire.questionList[this.currentHandleQuestion].isnecessary=1;
    this.isShowHandleDig=false;
  }
  public handleClose(){
    this.isShowHandleDig=false;
  }








































































=======

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
>>>>>>> .theirs
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