import { Component, OnInit } from '@angular/core';
import { BaseTemplateComponent } from '../basetemplate/basetemplate.component';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent extends BaseTemplateComponent implements OnInit {

  // constructor() {
  //   super();
  // }

  ngOnInit() {
  }

}
