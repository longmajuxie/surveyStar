import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-template-detail',
  templateUrl: './template-detail.component.html',
  styleUrls: ['./template-detail.component.scss']
})
export class TemplateDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $(".N_view").click(function(event) {
		    $(".reldiv").wordExport();
	    });
    });
  }
}
