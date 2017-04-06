import { Component, OnInit } from '@angular/core';
import { topicService } from '../../services/mock.topic'

@Component({
  selector: 'app-topic-discussion',
  templateUrl: './topic-discussion.component.html',
  styleUrls: ['./topic-discussion.component.scss']
})
export class TopicDiscussionComponent implements OnInit {
  private news;
  constructor(private _mockService: topicService) { }

  ngOnInit() {
      this._mockService.getNews().subscribe(
      // the first argument is a function which runs on success
      data => { this.news = data},
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading foods')
    );
  }

}
