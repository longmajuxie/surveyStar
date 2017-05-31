import { validate } from 'codelyzer/walkerFactory/walkerFn';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,Params } from '@angular/router';
import { QuestionnaireService } from '../../../services/questionnaire'
import 'rxjs/add/operator/switchMap';
import { Subscription }   from 'rxjs/Subscription';
declare var $: any;

@Component({
  selector: 'app-template-play',
  templateUrl: './template-play.component.html',
  styleUrls: ['./template-play.component.scss']
})
export class TemplatePlayComponent implements OnInit {

  questionnaire;
  questionnaireId;
  constructor(public router:Router,public Qs:QuestionnaireService,private route: ActivatedRoute,) { }
  
  ngOnInit() {
    this.route.params.switchMap((params: Params) =>  this.Qs.getById(+params['id']))
    .subscribe(data => {
      this.questionnaire = JSON.parse(data);
        for(let l=0, m=this.questionnaire.questions.length;l<m;l++){
          this.questionnaire.questions[l]["selected"]=[];
          this.questionnaire.questions[l].questionSelection=JSON.parse(this.questionnaire.questions[l].questionSelection);
        }
    });
  }
  //选择题，勾选
  select(index,qindex,genre){
     if(genre==0){
        this.questionnaire.questions[index]["selected"]=[qindex];
        for(let l=0, m=this.questionnaire.questions[index].questionSelection.length;l<m;l++){
           if(l==qindex){
             this.questionnaire.questions[index].questionSelection[l].isSelected=true;
           }else{
             this.questionnaire.questions[index].questionSelection[l].isSelected=false;
           }
        }
     }else{
       this.questionnaire.questions[index]["selected"]=[];
       for(let l=0, m=this.questionnaire.questions[index].questionSelection.length;l<m;l++){
           if(l==qindex){
             this.questionnaire.questions[index].questionSelection[l].isSelected=
             !this.questionnaire.questions[index].questionSelection[l].isSelected;
           }
           if(this.questionnaire.questions[index].questionSelection[l].isSelected==true){
             this.questionnaire.questions[index]["selected"].push(l);
           }
        }
     }
  }
  //矩阵勾选
  selectMatrix(index,line,qc,genre){
    this.questionnaire.questions[index]["selected"]=[];
    if(genre==0){
      for(let l=0,j=this.questionnaire.questions[index].questionSelection[0].line.length; l<j; l++){
          let n=this.questionnaire.questions[index].questionSelection[0].choice.length; 
            for(let m=0;m<n;m++){
              if(l == line && m== qc){
                this.questionnaire.questions[index].questionSelection[0].line[l].isSelected=[qc];
              }
            }
            if( l>0 && this.questionnaire.questions[index].questionSelection[0].line[l].isSelected.length>0){
              this.questionnaire.questions[index]["selected"].push((l-1)*n+this.questionnaire.questions[index].questionSelection[0].line[l].isSelected[0]);
            }
      }
    }else{
       for(let l=0,j=this.questionnaire.questions[index].questionSelection[0].line.length; l<j; l++){
            let m,n=this.questionnaire.questions[index].questionSelection[0].choice.length
            for(m=0 ; m<n ; m++){
              if(l == line && m==qc){
                  let indexOF=this.questionnaire.questions[index].questionSelection[0].line[l].isSelected.indexOf(qc)
                  if(indexOF!=-1){
                    this.questionnaire.questions[index].questionSelection[0].line[l].isSelected.splice(indexOF,1);
                  }else{
                    this.questionnaire.questions[index].questionSelection[0].line[l].isSelected.push(qc);
                  }
              }
            }
            if(l>0 && this.questionnaire.questions[index].questionSelection[0].line[l].isSelected.length>0){
                 for(let a=0,b=this.questionnaire.questions[index].questionSelection[0].line[l].isSelected.length;a<b;a++){
                   this.questionnaire.questions[index]["selected"].push((l-1)*n+this.questionnaire.questions[index].questionSelection[0].line[l].isSelected[a]);
                 }
             }
      }
    }
    this.questionnaire.questions[index]["selected"].sort(function(a,b){ return a-b});
  }
  submit(){
    console.log(this.questionnaire);
    this.Qs.savePlay(this.questionnaire).subscribe(
                    // the first argument is a function which runs on success
            data => { 
                this.router.navigate(['/report/view',this.questionnaire.questionnaireId]);
            },
          // the second argument is a function which runs on error
            err => console.error(err),
      // the third argument is a function which runs on completion
            () => console.log('done loading')
        );;
  }
  validate(){
    let missQ=[]
    for(let a=0,b=this.questionnaire.questions.length;a<b;a++){
      if(this.questionnaire.questions[a].isNecessary==1){
        
      }
    }
  }
}
