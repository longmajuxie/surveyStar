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

  ngOnInit() {
    let _this=this;
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
    } );
  }

}
