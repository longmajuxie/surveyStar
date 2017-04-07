import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-topic-discussion',
  templateUrl: './topic-discussion.component.html',
  styleUrls: ['./topic-discussion.component.scss']
})
export class TopicDiscussionComponent implements OnInit {
  public indextab;
  constructor() { }

  ngOnInit() {
    this.indextab=0;

  }
  public changeNewsList(index){
       this.indextab=index;
  }

}
