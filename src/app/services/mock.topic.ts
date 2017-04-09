import {Injectable,OnInit} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import { TopicMessage } from'../models/topic-dis-models/topicMessages'

@Injectable()
export class topicService implements OnInit {
    newsData;
    newsDetail;
    constructor(private http:Http) {
    }
    ngOnInit(){}
    // Uses http.get() to load a single JSON file
    getNews() {
        this.newsData = this.http.get('../../assets/json/newsList.json').map((res:Response) => res.json());
        return this.newsData
    }
    getNewsDetail(index:number,genre:number){
        this.newsData = this.http.get('../../assets/json/newsList.json').map((res:Response) => res.json());
        this.newsDetail=this.newsData[genre][index] || null;
        return this.newsDetail;
    }
}
