import { Component, OnInit ,OnDestroy} from '@angular/core';
import { ActivatedRoute, Router,Params } from '@angular/router';
import { topicService } from '../../../services/mock.topic'
import { Subscription }   from 'rxjs/Subscription';
import { TopicMessage } from'../../../models/topic-dis-models/topicMessages'
import { Location }     from '@angular/common';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-topic-discussion-list',
  templateUrl: './topic-discussion-list.component.html',
  styleUrls: ['./topic-discussion-list.component.scss']
})
export class TopicDiscussionListComponent implements OnInit,OnDestroy {
  news;
  newsList : TopicMessage[];
  indextab :number;
  genreTab;
  tabGenre=['休闲娱乐','社会生活','情感世界','科技财经','热点时事','各行各业'];
  subscription: Subscription;
  sub;
  constructor(private _mockService: topicService, private route: ActivatedRoute,
  private location:Location,private router: Router ) {}
   
  ngOnInit() {
    this.sub=this.route.params
        .switchMap((params: Params) => params['id'])
        .subscribe(x=>{
            this.indextab=+x;
            this.indextab= this.indextab? this.indextab:0;
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
            () => console.log('done loading')
            );
        });
 
  }
  tabInto(i){
     this.router.navigate(['/pages/topic-discussion/detail'], { queryParams: { tabIndex: this.indextab, index: i} });
  }
  ngOnDestroy(){
    /*this.sub.unsubscribe()*/
  }
}
