import { Component, OnInit, ViewChild } from '@angular/core';
import { QuestionnaireService } from '../../../services/questionnaire';
import { ActivatedRoute, Router, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Subscription } from 'rxjs/Subscription';

import { Ng2Highcharts } from 'ng2-highcharts';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  questionnaireId;
  questionnaireReportData;
  optionsList = [];
  dropDowm = false;
  constructor(public router: Router, public Qs: QuestionnaireService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.switchMap((params: Params) => this.Qs.getsavePlayById(+params['id']))
      .subscribe(data => {
        this.questionnaireReportData = JSON.parse(data).result;
        this.setChartData();
      });

  }
  selectChart(qindex, chartType) {
    this.optionsList[qindex].chartType = chartType;
    this.optionsList[qindex].dropDowm = false;
  }
  setChartData() {
    let qptionsList = [];
    for (let l = 0, m = this.questionnaireReportData.length; l < m; l++) {
      let dataA = [];
      let answerCount = 0;
      let questionTitle = this.questionnaireReportData[l].question.questionName;
      let selectedData = JSON.parse(this.questionnaireReportData[l].question.questionSelection);
      for (let a = 0, b = selectedData.length; a < b; a++) {
        for (let c = 0, d = this.questionnaireReportData[l].answers.length; c < d; c++) {
          if (this.questionnaireReportData[l].answers[c].selectName == a) {
            dataA.push([selectedData[a].text, parseInt(this.questionnaireReportData[l].answers[c].selectCount)]);
            answerCount += parseInt(this.questionnaireReportData[l].answers[c].selectCount);
          } else {
            dataA.push([selectedData[a].text, 0]);
          }
        }
      }
      let optionsLIst = [
        {
          chart: {
            type: "column"
          },
          title: {
            text: questionTitle
          },
          subtitle: {
            text: '答题总次数:' + answerCount.toString() + "次"
          },
          xAxis: {
            type: 'category',
            labels: {
              rotation: 0,
              style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
              }
            }
          },
          yAxis: {
            min: 0,
            title: {
              text: '答案 (次)'
            }
          },
          legend: {
            enabled: false
          },
          tooltip: {
            pointFormat: '选择答案: <b>{point.y} 次</b>'
          },
          series: [{
            name: '总人口',
            data: dataA,
            dataLabels: {
              enabled: true,
              rotation: -90,
              color: '#FFFFFF',
              align: 'right',
              format: '{point.y}', // one decimal
              y: 10, // 10 pixels down from the top
              style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
              }
            },
            credits: {
              enabled: false
            }
          }]
        },
        {
          chart: {
            type: "bar"
          },
          title: {
            text: questionTitle
          },
          subtitle: {
            text: '答题总人数' + answerCount
          },
          xAxis: {
            type: 'category',
            labels: {
              rotation: 0,
              style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
              }
            }
          },
          yAxis: {
            min: 0,
            title: {
              text: '答案 (次)'
            }
          },
          legend: {
            enabled: false
          },
          tooltip: {
            pointFormat: '选择答案: <b>{point.y} 次</b>'
          },
          series: [{
            name: '总人数',
            data: dataA,
            dataLabels: {
              enabled: true,
              rotation: -90,
              color: '#FFFFFF',
              align: 'right',
              format: '{point.y}', // one decimal
              y: 10, // 10 pixels down from the top
              style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
              }
            },
            credits: {
              enabled: false
            }
          }]
        },
        {
          chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
          },
          title: {
            text: questionTitle
          },
          tooltip: {
            headerFormat: '{series.name}<br>',
            pointFormat: '{point.name}: <b>{point.percentage}%</b>'
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage} %',
              }
            }
          },
          series: [{
            type: 'pie',
            name: '答题总人数',
            data: dataA
          }]
        },
        {
          chart: {
            type: "line"
          },
          title: {
            text: questionTitle
          },
          subtitle: {
            text: '答题总人数' + answerCount
          },
          xAxis: {
            type: 'category',
            labels: {
              rotation: 0,
              style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
              }
            }
          },
          yAxis: {
            min: 0,
            title: {
              text: '答案 (次)'
            }
          },
          legend: {
            enabled: false
          },
          tooltip: {
            pointFormat: '选择答案: <b>{point.y} 次</b>'
          },
          series: [{
            name: '总人口',
            data: dataA,
            dataLabels: {
              enabled: true,
              rotation: -90,
              color: '#FFFFFF',
              align: 'right',
              format: '{point.y}', // one decimal
              y: 10, // 10 pixels down from the top
              style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
              }
            },
            credits: {
              enabled: false
            }
          }]
        },
      ]
      qptionsList.push({
        chartType: 0,
        dropDowm: false,
        options: optionsLIst
      })
    }
    this.optionsList = qptionsList;
    console.log(this.optionsList);
  }
}
