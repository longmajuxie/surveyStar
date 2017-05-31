import { Component, OnInit,Output } from '@angular/core';
import { QuestionnaireService } from '../../services/questionnaire';
import { Pagination } from '../../widgets/pagination/pagination'
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  public  questionnaireTypes=[
        {
           questionnaireStage:"产品调研阶段",
           questionnaireGenreDetail:[
               {
                 id:1,
                 title:"市场调研"  
              },
               {
                 id:2,
                 title:"用户偏好调研"  
              },
               {
                 id:3,
                 title:"消费者行为调研"  
              },
               {
                 id:4,
                 title:"产品使用习惯调研"  
              }
           ]
            
        },
        {
           questionnaireStage:"产品研发阶段",
           questionnaireGenreDetail:[
              {
                 id:5,
                 title:"功能体验调研"  
              },
               {
                 id:6,
                 title:"性能体验调研"  
              },
               {
                 id:7,
                 title:"操作流程体验调研"  
              },
               {
                 id:8,
                 title:"页面展示效果体验"  
              }
           ]
        },{
           questionnaireStage:"产品发布前",
           questionnaireGenreDetail:[
              {
                 id:9,
                 title:"价格接受度调研"  
              },
               {
                 id:10,
                 title:"产品名称测试"  
              },
               {
                 id:11,
                 title:"用户触媒习惯调研"  
              },
               {
                 id:12,
                 title:"广告语测试"  
              }
           ]
        },{
           questionnaireStage:"产品发布后",
           questionnaireGenreDetail:[
              {
                 id:13,
                 title:"用户满意度调研"  
              },
               {
                 id:14,
                 title:"活动效果评估"  
              },
               {
                 id:15,
                 title:"产品服务质量测评"  
              },
               {
                 id:16,
                 title:"广告效果评估"  
              }
           ]
        },
        {
           questionnaireStage:"产品战略",
           questionnaireGenreDetail:[
              {
                 id:17,
                 title:"产品定义"  
              }
           ]
        },
        {
           questionnaireStage:"产品品质",
           questionnaireGenreDetail:[
              {
                 id:18,
                 title:"产品体验"  
              }
           ]
        }
    ]
  isList=true;
  isShowSelectTab=false;
  currentStatus="全部状态";
  questionList;
  questionnaireEntity={
    questionnaireName:"",
    quesState:null
  }
  
  @Output() 
  public pagination:Pagination = Pagination.defaultPagination;
  constructor(public Qs:QuestionnaireService,) {

   }

  ngOnInit() {
    this.initList();
    this.pagination.changePage = (() => {
      this.initList();
    });
  }
  private statusChanged(state){
      if(state==0){
         this.currentStatus="全部状态";
         this.questionnaireEntity.quesState=null;
      }else if(state==1){
         this.currentStatus="未发布";
         this.questionnaireEntity.quesState=0;
      }else {
         this.currentStatus="已发布";
          this.questionnaireEntity.quesState=1;
      }
      this.filter();
      this.isShowSelectTab=false;
  }
  
  private filter(){
     this.pagination=Pagination.defaultPagination;
     this.initList();
  }
  private initList(): void {
        this.Qs.getList(this.questionnaireEntity,{page:this.pagination.currentPage,rows:this.pagination.pageItems}).subscribe(
                    // the first argument is a function which runs on success
            data => {
                let  resData=JSON.parse(data);
                if(resData.result=="success"){
                  this.questionList=resData.questionnaires;
                  this.pagination.totalItems =resData.page.total;
                  this.pagination.pageNum=Math.ceil(this.pagination.totalItems/this.pagination.pageItems);
                }
            },
          // the second argument is a function which runs on error
            err => console.error(err),
      // the third argument is a function which runs on completion
            () => console.log('done loading')
        );
  }
}
