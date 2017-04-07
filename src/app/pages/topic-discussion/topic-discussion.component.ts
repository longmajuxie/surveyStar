import { Component, OnInit } from '@angular/core';
import { topicDiscussionService } from './topic-discussion.service';


@Component({
  selector: 'app-topic-discussion',
  templateUrl: './topic-discussion.component.html',
  styleUrls: ['./topic-discussion.component.scss']
})
export class TopicDiscussionComponent implements OnInit {
   indextab =0;
  constructor(private _topicService: topicDiscussionService) {
   }

  ngOnInit() {}
  public changeNewsList(index){
       this.indextab=index;
       this._topicService.changeTabMission(this.indextab);
  }

}
