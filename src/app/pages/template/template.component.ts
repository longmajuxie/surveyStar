import { Component, OnInit,Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { ActivatedRoute, Router,Params } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  isShowTemp=false;
  constructor(public router:Router) { }
  hotWords=["满意度","大学生消费","兼职","培训需求","消费者","就业","新生","市场调查","顾客","用户","客户"];
  filterName;
  indextab;
  ngOnInit() {
   
  }
  filter(index){
     this.indextab=index;
     let timestamp = (new Date()).valueOf();
     this.router.navigate(['/pages/template/list/'+timestamp], { queryParams: { filterName: this.filterName,genre:index} });
  }
}
