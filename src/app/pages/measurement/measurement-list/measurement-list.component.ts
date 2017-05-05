import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { measurementService } from '../../../services/mock.measurement'

@Component({
  selector: 'app-measurement-list',
  templateUrl: './measurement-list.component.html',
  styleUrls: ['./measurement-list.component.scss']
})
export class MeasurementListComponent implements OnInit {
  
  news;
  currentGenre;
  currentIndex;
  pageCount;
  pageCountList;
  lists;
  constructor(private _mockService:measurementService,public route:ActivatedRoute,public router:Router) {
        this.route.queryParams.subscribe(params => {
                  this.currentGenre =JSON.parse(params['genre'] ||8);
                  this._mockService.getNews().subscribe(
                      data => {
                        this.currentIndex=0;
                        this.pageCountList=[];
                        this.lists=data;
                        this.pageCount=data[this.currentGenre].length;
                        for(let i=0;i<this.pageCount;i++){
                          if(data[this.currentGenre][i].length!=0){
                            this.pageCountList.push(i);
                          }
                        }
                        this.changePage(this.currentGenre,this.currentIndex);
                      },
                      err => console.error(err),
                      () => console.log('done loading')
                 );
        }) 
   }

  ngOnInit() {
    
  }
  public changePage(genre,index){
      this.currentIndex=index;
      this.news = this.lists[genre][index];
  }
  public detail(index){
    this.router.navigate(['/pages/measurement/detail'], { queryParams: { genre: this.currentGenre,pageIndex:this.currentIndex,index:index} });
  }
}
