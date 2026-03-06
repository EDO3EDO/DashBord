import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables)
@Component({
  selector: 'app-chart6',
  templateUrl: './chart6.component.html',
  styleUrls: ['./chart6.component.css']
})
export class Chart6Component implements OnInit {

  constructor() { }

  data: any = {

    labels: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    datasets: [{
      label: 'Total Clicks',

      data: [15, 25, 28, 35, 45, 55, 65, 75, 88, 100],

      backgroundColor: (context: any) => {
        const chart = context.chart;
        const {ctx, chartArea} = chart;
        if (!chartArea) return;


        const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);

        gradient.addColorStop(0, '#ff1a8c'); // فوشيا مشرق (أسفل)
        gradient.addColorStop(1, '#9333ea'); // بنفسجي غامق (أعلى)

        return gradient;
      },

      borderWidth: 0,
      borderRadius: {
    topLeft: 15,
    topRight: 15,
    bottomLeft: 15,
    bottomRight: 15,
  },
    borderSkipped: false,
      barThickness: 10,
    }]
  };

  config: any = {
    type: 'bar',
    data: this.data,
    options: {
      responsive: true,
      maintainAspectRatio: false,


      scales: {
        y: {
          display: false,
          grid: {
            display: false
          }
        },
        x: {
          display: false,
          grid: {
            display: false
          }
        }
      },


      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          enabled: true
        }
      }
    },
  };

  ClicksChart:any

  ngOnInit() {
    this.ClicksChart = new Chart("ClicksChart", this.config);
  }

}
