import { Component, OnInit } from '@angular/core';
import { topicService } from '../../../services/mock.topic'
import { topicDiscussionService } from '../topic-discussion.service';
import { Subscription }   from 'rxjs/Subscription';

@Component({
  selector: 'app-topic-discussion-list',
  templateUrl: './topic-discussion-list.component.html',
  styleUrls: ['./topic-discussion-list.component.scss']
})
export class TopicDiscussionListComponent implements OnInit {
  news;
  newsList;
  indextab=0;
  genreTab;
  tabGenre=['休闲娱乐','社会生活','情感世界','科技财经','热点时事','各行各业'];
  subscription: Subscription;
  constructor(private _mockService: topicService,private _topicService:topicDiscussionService ) {
   this.subscription = _topicService.tabIndexCHanged$.subscribe(
      indextab => {
        this.indextab=indextab;
        this.newsList=this.news[this.indextab];
        this.genreTab=this.tabGenre[this.indextab];
      });
   }

  ngOnInit() {
      this._mockService.getNews().subscribe(
      // the first argument is a function which runs on success
      data => { 
        this.news = data
        this.newsList=this.news[0];
        this.newsList=this.news[this.indextab];
        this.genreTab=this.tabGenre[this.indextab];
      },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading foods')
    );
  }
}
