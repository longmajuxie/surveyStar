import { Component, OnInit } from '@angular/core';
import { topicService } from '../../../services/mock.topic'

@Component({
  selector: 'app-topic-discussion-list',
  templateUrl: './topic-discussion-list.component.html',
  styleUrls: ['./topic-discussion-list.component.scss']
})
export class TopicDiscussionListComponent implements OnInit {
private news;
  public newsList;
  public indextab;
  public genreTab;
  constructor(private _mockService: topicService) { }

  ngOnInit() {
      this._mockService.getNews().subscribe(
      // the first argument is a function which runs on success
      data => { 
        this.news = data
        this.newsList=this.news[0];
      },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading foods')
    );
    this.indextab=0;
    this.genreTab='休闲娱乐'
  }
  public changeNewsList(index){
       let tabGenre=['休闲娱乐','社会生活','情感世界','科技财经','热点时事','各行各业'];
       this.indextab=index;
       this.newsList=this.news[index];
       this.genreTab=tabGenre[index];
  }
}
