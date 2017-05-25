import { FileItem } from 'ng2-file-upload/file-upload/file-item.class';
import { Component, OnInit ,ViewEncapsulation,HostListener} from '@angular/core';
import { ActivatedRoute, Router,Params } from '@angular/router';
import {Http, Response, Headers, RequestOptions,RequestOptionsArgs,URLSearchParams} from "@angular/http";
import { FileUploader,ParsedResponseHeaders } from 'ng2-file-upload';
declare var $: any;
import { QuestionnaireDelService } from '../questionnaire.service';
import { QuestionnaireService } from '../../../services/questionnaire'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Subscription }   from 'rxjs/Subscription';

const URL = 'api/file/uploadFile';
@Component({
  selector: 'app-questionnaire-create',
  templateUrl: './questionnaire-create.component.html',
  styleUrls: ['./questionnaire-create.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class QuestionnaireCreateComponent implements OnInit {

  qustionnaire={
    questionnaireTitle:"问卷名",
    questionnaireType:0,
    questionnairePrompt:"欢迎参加调查！答卷数据仅用于统计分析，请放心填写。题目选项无对错之分，按照实际情况选择即可。感谢您的帮助！",
    questionList:[]
  };
  currentHandleQuestion:number;
  isShowHandleDig=false;
  public uploader:FileUploader = new FileUploader({url: URL});
  constructor(public del:QuestionnaireDelService,public router:Router,public Qs:QuestionnaireService,private route: ActivatedRoute,) { }
  ngOnInit() {
    this.route.params.map((params: Params) => params['genre'])
        .subscribe(genre=>{
        this.qustionnaire.questionnaireType=+genre;
        if(this.qustionnaire.questionnaireType==0){
            this.qustionnaire["questionnaireCatalog"]=-1;
        }else if(this.qustionnaire.questionnaireType>=1 && this.qustionnaire.questionnaireType<=4){
            this.qustionnaire["questionnaireCatalog"]=1;
        }else if(this.qustionnaire.questionnaireType>=5 && this.qustionnaire.questionnaireType<=8){
            this.qustionnaire["questionnaireCatalog"]=2;
        }else if(this.qustionnaire.questionnaireType>=9 && this.qustionnaire.questionnaireType<=12){
            this.qustionnaire["questionnaireCatalog"]=3;
        }else if(this.qustionnaire.questionnaireType>=13 && this.qustionnaire.questionnaireType<=17){
            this.qustionnaire["questionnaireCatalog"]=4;
        }else if(this.qustionnaire.questionnaireType==18){
            this.qustionnaire["questionnaireCatalog"]=5;
        }else if(this.qustionnaire.questionnaireType==19){
            this.qustionnaire["questionnaireCatalog"]=6;
        }
    })
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
                this.uploader.onAfterAddingFile=function(FileItem){
                    FileItem.upload();
                   /* FileItem._onComplete = ( response: string, status: number,
                      headers: ParsedResponseHeaders) => {
                       console.log(123);
                    };*/
                    FileItem._onError=function(response, status, headers){
                        console.log(456);
                    }
                    FileItem._onSuccess=function(response, status, headers){
                        setTimeout(function(){
                            _this.qustionnaire.questionList[qindex].questionChoice.push(
                            { 
                                    imgUrl:"http://localhost:10080/oa/api/upload/"+JSON.parse(response).fileName,
                                    text:"选项内容"+(_this.qustionnaire.questionList[qindex].questionChoice.length+1),
                                    isSelected:false
                            })
                        },5000)
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
  public saveSurvey(){
    this.Qs.saveSurvey(this.qustionnaire).subscribe(
                    // the first argument is a function which runs on success
            data => { 
                this.router.navigate(['/pages/questionnaire/list']);
            },
          // the second argument is a function which runs on error
            err => console.error(err),
      // the third argument is a function which runs on completion
            () => console.log('done loading')
        );
  }
  public previewSurvey(){
      this.router.navigate(['/pages/questionnaire/previewOrPlay'], { queryParams: { questionnaire: JSON.stringify(this.qustionnaire)} });
  }
      
}
