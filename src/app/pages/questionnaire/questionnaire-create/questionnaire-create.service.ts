import {Injectable,OnInit} from '@angular/core';



@Injectable()
export class QuestionnaireDelService implements OnInit {
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
    };
    constructor() {
    }
    ngOnInit(){
    }
    createQuestionnaireQuestion(index){
            let question={
                 questionGenre:index,
                 questionTitle:this.questionGenre[index],
                 isnecessary:0,     //0表示必做，1表示选做
                 questionChoice:[]
              };
              let questionChoice=[];
              if(index==0||index==1||index==2){
                questionChoice.push(
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
                            }
                );
              }
              else if(index==3||index==4||index==9){
                questionChoice.push( {
                                text:"",
                                isSelected:false
                            },);
              }
              else if(index==5||index==6){
                questionChoice.push(
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
                questionChoice.push();
              }
       question.questionChoice=questionChoice;
       return question;
    }
   
}
