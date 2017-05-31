import { Component, OnInit,Output } from '@angular/core';
import { Pagination } from '../../../widgets/pagination/pagination'
import { QuestionnaireService } from '../../../services/questionnaire'
import { Subscription }   from 'rxjs/Subscription';
import {ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.scss']
})
export class TemplateListComponent implements OnInit {
  questionnaireEntity={
      questionnaireName:"",
      quesState:null,
      questionnaireCatalog:0
    }
  questionList;
  @Output() 
  public pagination:Pagination = Pagination.defaultPagination;
  constructor(public Qs:QuestionnaireService,private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.questionnaireEntity.questionnaireCatalog = +params['genre'] || null;
        this.questionnaireEntity.questionnaireName= params['filterName'];
        this.initList();
    });
    /*this.initList();*/
    this.pagination.changePage = (() => {
      this.initList();
    });
  }
  private CatalogChanged(state){
      this.questionnaireEntity.questionnaireCatalog=state;
      this.filter();
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
