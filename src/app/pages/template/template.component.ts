import { Component, OnInit,Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
declare var $: any;

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  isShowTemp=false;
  constructor() { }
  hotWords=["满意度","大学生消费","兼职","培训需求","消费者","就业","新生","市场调查","顾客","用户","客户"];
  ngOnInit() {
    /*let _this=this;
    $( ".newButton" ).hover(//为li绑定了鼠标进入和鼠标移开的两个参数  
    function() {  
        $('.temGenre').css('display','block');  
        _this.isShowTemp=true;
      }, function() {  
      } );
    $( ".createTemplate" ).hover(//为li绑定了鼠标进入和鼠标移开的两个参数  
    function() { 
    }, function() {  
      $('.temGenre').css('display','none');  
    } );*/
  }

}
