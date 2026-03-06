import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables)
@Component({
  selector: 'app-chart4',
  templateUrl: './chart4.component.html',
  styleUrls: ['./chart4.component.css']
})
export class Chart4Component implements OnInit {

  constructor() { }


  viewsData = {
  labels: ['1', '2', '3', '4', '5', '6', '7'],
  datasets: [{
    label: 'Total Views',
    data: [30, 50, 40, 60, 45, 70, 50],
    tension: 0,
    borderColor: (context: any) => {
      const chart = context.chart;
      const {ctx, chartArea} = chart;
      if (!chartArea) return '#0ea5e9';
      const gradient = ctx.createLinearGradient(chartArea.left, 0, chartArea.right, 0);
      gradient.addColorStop(0, '#0ea5e9');
      gradient.addColorStop(1, '#ff1a8c');
      return gradient;
    },
    borderWidth: 3,
    pointBackgroundColor: '#ff1a8c',
    pointBorderColor: '#fff',
    pointBorderWidth: 2,
    pointRadius: 6,
    pointHoverRadius: 8,
  }]
};

viewsConfig: any = {
  type: 'line',
  data: this.viewsData,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { display: false },
      y: { display: false }
    },
    plugins: {
      legend: { display: false }
    }
  }
};

chart_end:any;

  ngOnInit() {
    this.chart_end = new Chart("chart_end" , this.viewsConfig)
  }

}
