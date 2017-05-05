import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { measurementService } from '../../../services/mock.measurement'
declare var $: any;

@Component({
  selector: 'app-measurement-detail',
  templateUrl: './measurement-detail.component.html',
  styleUrls: ['./measurement-detail.component.scss']
})
export class MeasurementDetailComponent implements OnInit {


  constructor(private _mockService:measurementService,public route:ActivatedRoute,) {
     this.route.queryParams.subscribe(params => {
                  let currentGenre = JSON.parse(params['genre'] || 0 );
                  let currentPageIndex = JSON.parse(params['pageIndex'] || 0 );
                  let currentIndex = JSON.parse(params['index'] || 0 );
                  this._mockService.getNews().subscribe(
                      data => {
                        let currentDetailHtml=data[currentGenre][currentPageIndex][currentIndex].detail;
                        currentDetailHtml=currentDetailHtml.replace("/static/images/weibo_v.gif","http://www.xzw.com/static/images/weibo_v.gif")
                        currentDetailHtml=currentDetailHtml.replace("<script>setp_ad(1)","");
                        currentDetailHtml=currentDetailHtml.replace("<script>setp_ad(2)","");
                        currentDetailHtml=currentDetailHtml.replace("<script>setp_ad(3)","");
                        currentDetailHtml=currentDetailHtml.replace(/<a/g,"<span");
                        currentDetailHtml=currentDetailHtml.replace(/<\/a>/g,"</span>");
                        $("#detail").html(currentDetailHtml);
                        /*$("a").remove();*/
                        $(".adb").remove();
                      },
                      err => console.error(err),
                      () => console.log('done loading')
                 );
        }) 
   }

  ngOnInit() {
  }

}
