import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';

@Injectable()
export class topicService {

    constructor(private http:Http) {
    }

    // Uses http.get() to load a single JSON file
    getNews() {
        return this.http.get('../../assets/json/newsList.json').map((res:Response) => res.json());
    }
}
