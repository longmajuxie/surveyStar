import { FileItem } from 'ng2-file-upload/file-upload/file-item.class';
import { Component, OnInit ,ViewEncapsulation,HostListener} from '@angular/core';
import { ActivatedRoute, Router,Params } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
declare var $: any;
import { QuestionnaireDelService } from './questionnaire-create.service';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
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
  public uploader:FileUploader = new FileUploader({url: URL});
  constructor(public del:QuestionnaireDelService,public router:Router) { }
  ngOnInit() {}
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
  public questionDelete=function(index){
    this.qustionnaire.questionList.splice(index,1);
  }
  public addQuestionChoice(qindex,index){
              if(index==0||index==1||index==2){
                 this.qustionnaire.questionList[qindex].questionChoice.push(
                      {
                          text:"选项内容"+(this.qustionnaire.questionList[qindex].questionChoice.length+1),
                          isSelected:false
                      }
                );
              }
              else if(index==3||index==4||index==9){
                 this.qustionnaire.questionList[qindex].questionChoice.push( {
                                text:"",
                                isSelected:false
                            },);
              }else if(index==7||index==8){
                let _this=this;
                this.uploader.autoUpload=true;
                this.uploader.onAfterAddingFile=function(FileItem){
                    FileItem.upload();
                    FileItem._onError=function(response, status, headers){
                        console.log(456);
                    }
                    FileItem._onSuccess=function(response, status, headers){
                       _this.qustionnaire.questionList[qindex].questionChoice.push(
                            { 
                                    imgUrl:"",
                                    text:"选项内容"+(_this.qustionnaire.questionList[qindex].questionChoice.length+1),
                                    isSelected:false
                            },
                        );
                    }
                    
                };
                 
              }
  }
  public addMatrixQuestionChoice(qindex,direction){
        if(direction==1){
             this.qustionnaire.questionList[qindex].questionChoice[0].line.push(
                 {
                     text:"矩阵行"+ (this.qustionnaire.questionList[qindex].questionChoice[0].line.length),
                     isSelected:false
                 }
             )
        }else if(direction==0){
             this.qustionnaire.questionList[qindex].questionChoice[0].choice.push({
                  text:"选项内容"+ (this.qustionnaire.questionList[qindex].questionChoice[0].choice.length+1),
                     isSelected:false
             })
        }
  }
  public deleteMatrixQuestionChoice(qindex,direction,qc){
     if(direction==0){
             this.qustionnaire.questionList[qindex].questionChoice[0].line.splice(qc,1);
        }else if(direction==1){
             this.qustionnaire.questionList[qindex].questionChoice[0].choice.splice(qc,1)
        }
  }
  public deleteQuestionChoice(qindex,cindex){
      this.qustionnaire.questionList[qindex].questionChoice.splice(cindex,1);
  }
  //下拉选择
  public editSelect(index){
       this.qustionnaire.questionList[index].isEdit=true;
  }
  public finishEditSelect(index){
       this.qustionnaire.questionList[index].isEdit=false;
  }
  public questionHandle(index){
      this.currentHandleQuestion=index;
      if(this.qustionnaire.questionList[this.currentHandleQuestion].isNecessary==false){
        $("#questionRequiredSet")[0].checked=true;
      }else{
        $("#questionRequiredSet")[0].checked=false;
      }
      this.isShowHandleDig=true;
  }
  public handleConfirm(){
      if($("#questionRequiredSet")[0].checked==true){
           this.qustionnaire.questionList[this.currentHandleQuestion].isNecessary=false;
      }else{
          this.qustionnaire.questionList[this.currentHandleQuestion].isNecessary=true;
      }
      this.isShowHandleDig=false;
  }
  public handleClose(){
    this.isShowHandleDig=false;
  }
  public previewSurvey(){
      this.router.navigate(['/pages/questionnaire/previewOrPlay'], { queryParams: { questionnaire: JSON.stringify(this.qustionnaire)} });
  }
      
}
