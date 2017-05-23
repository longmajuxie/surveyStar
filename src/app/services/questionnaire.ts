import {Injectable,OnInit} from '@angular/core';
import {Http, Response, Headers, RequestOptions,RequestOptionsArgs,URLSearchParams} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

declare var $: any;

@Injectable()
export class QuestionnaireService implements OnInit {
    newsData;
    newsDetail;
    private headers = new Headers();
    constructor(private http:Http) {
    }
    ngOnInit(){}
    // Uses http.get() to load a single JSON file
    saveSurvey(survey){
        const params = new URLSearchParams();
        let surveyWithNoQues = {
            questionnaireTitle:survey["questionnaireTitle"],
            questionnairePrompt:survey["questionnairePrompt"]
        };
        params.set('questionList', JSON.stringify(survey.questionList));
        params.set('questionnaireEntity', JSON.stringify(surveyWithNoQues));
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
       return this.http.post("api/questionnaire/create",params)
        .map(this.extractData)
        .catch(this.handleError);
    }
    getNews() {
        this.newsData = this.http.get('assets/json/measurementList.json').map((res:Response) => res.json());
        return this.newsData
    }
    getNewsDetail(index:number,genre:number){
        this.newsData = this.http.get('assets/json/measurementList.json').map((res:Response) => res.json());
        this.newsDetail=this.newsData[genre][index] || null;
        return this.newsDetail;
    }
    private extractData(res: Response) {
        let body
        if(res.status==200){
            return res["_body"];
        }   
        return body.data || { };
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
    getList(SearchKey,pages){
        SearchKey=JSON.stringify(SearchKey);
        pages=JSON.stringify(pages);
        return this.http.get('api/questionnaire/getAll/?questionnaireEntity='+SearchKey+'&pageEntity='+pages)
           .map(this.extractData)
           .catch(this.handleError);
    }
}
