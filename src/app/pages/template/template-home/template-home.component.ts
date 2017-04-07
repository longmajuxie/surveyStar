import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-home',
  templateUrl: './template-home.component.html',
  styleUrls: ['./template-home.component.scss']
})
export class TemplateHomeComponent implements OnInit {
  public tabIndex=0;
  constructor() { }

  ngOnInit() {
  }
 public changeTab(index){
    this.tabIndex=index;
  }
}
