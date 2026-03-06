import { Component, OnInit } from '@angular/core';
import { Chart3 } from '../Chart-3/Chart-3.component';
import { Chart1 } from '../chart_2/chart_2.component';
import { Chart4Component } from "../chart4/chart4.component";
import { Chart5Component } from "../chart5/chart5.component";
import { Chart6Component } from "../chart6/chart6.component";

@Component({
  selector: 'app-Analysis',
  templateUrl: './Analysis.component.html',
  imports: [Chart3, Chart1, Chart4Component, Chart5Component, Chart6Component],
  styleUrls: ['./Analysis.component.css']
})
export class AnalysisComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
