import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';


Chart.register(...registerables)

@Component({
  selector: 'app-chart3',
  imports: [],
  templateUrl: './Chart-3.component.html',
  styleUrl: './Chart-3.component.css',
})
export class Chart3 implements OnInit{

  data = {
  datasets: [{
    label: 'All Viwes',
    data: [250, 125, 75],
    backgroundColor: [
      '#3b82f6',
      '#ef4444',
      '#22c55e'
    ],
    hoverOffset: 4,
    borderWidth: 0,
  }]
};



config:any = {
  type: 'doughnut',
  data: this.data,
};

chart:any;

  ngOnInit(): void {
    this.chart = new Chart('chart',this.config)
  }









}
