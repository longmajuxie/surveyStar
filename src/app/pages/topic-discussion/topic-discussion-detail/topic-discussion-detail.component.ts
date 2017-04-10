import { topicService } from './../../../services/mock.topic';
import { Component, OnInit,OnDestroy } from '@angular/core';
import {ActivatedRoute, Params } from '@angular/router';
import { Location }     from '@angular/common';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { TopicMessage } from'../../../models/topic-dis-models/topicMessages'
import { Subscription }   from 'rxjs/Subscription';



@Component({
  selector: 'app-topic-discussion-detail',
  templateUrl: './topic-discussion-detail.component.html',
  styleUrls: ['./topic-discussion-detail.component.scss']
})
export class TopicDiscussionDetailComponent implements OnInit,OnDestroy {
  indextab:number;
  genre:number;
  topicMessage:TopicMessage;
  subscription: Subscription;
  currentGenre;
  index;
  sub;
  constructor(
    private topicservice: topicService,
    private route: ActivatedRoute,
    private location:Location
  ) {}

  ngOnInit() {
      this.sub = this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.indextab = +params['tabIndex'] || 0;
        this.index= +params['index'] || 0;
        this.topicservice.getNews().subscribe(
             data=> { 
                let Genre=['休闲娱乐','社会生活','情感世界','科技财经','热点时事','各行各业'];
                this.currentGenre=[this.indextab];
                this.topicMessage=data[this.indextab][this.index];
              })
      });
  }
  back(){
    this.location.back();
  }
  ngOnDestroy(){
   /* this.sub.unsubscribe()  */
  }

}
