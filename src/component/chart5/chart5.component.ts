import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';


Chart.register(...registerables)
@Component({
  selector: 'app-chart5',
  templateUrl: './chart5.component.html',
  styleUrls: ['./chart5.component.css']
})
export class Chart5Component implements OnInit {

  constructor() { }



lineData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Main Product',
      data: [65, 59, 80, 81, 56, 55, 40],
      tension: 0.4,
      fill: true,
      pointRadius: 5,
      pointBackgroundColor: '#fff',

      borderColor: (context: any) => {
        const chart = context.chart;
        const { ctx, chartArea } = chart;
        if (!chartArea) return '#0ea5e9';
        const gradient = ctx.createLinearGradient(0, chartArea.left, chartArea.right, 0);
        gradient.addColorStop(0, "#0ea5e9");
        gradient.addColorStop(1, "#22c55e");
        return gradient;
      },

      backgroundColor: (context: any) => {
        const chart = context.chart;
        const { ctx, chartArea } = chart;
        if (!chartArea) return;
        const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
        gradient.addColorStop(0, "rgba(14, 165, 233, 0.4)");
        gradient.addColorStop(1, "rgba(14, 165, 233, 0)");
        return gradient;
      },
    },
    {
      label: 'Secondary Product',
      data: [45, 40, 55, 50, 65, 45, 70],
      tension: 0.4,
      fill: true,
      pointRadius: 5,
      pointBackgroundColor: '#fff',

      borderColor: (context: any) => {
        const chart = context.chart;
        const { ctx, chartArea } = chart;
        if (!chartArea) return '#f43f5e';
        const gradient = ctx.createLinearGradient(0, chartArea.left, chartArea.right, 0);
        gradient.addColorStop(0, "#f43f5e");
        gradient.addColorStop(1, "#fb923c");
        return gradient;
      },
      backgroundColor: (context: any) => {
        const chart = context.chart;
        const { ctx, chartArea } = chart;
        if (!chartArea) return;
        const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
        gradient.addColorStop(0, "rgba(244, 63, 94, 0.2)");
        gradient.addColorStop(1, "rgba(244, 63, 94, 0)");
        return gradient;
      },
    }
  ]
};


lineConfig: any = {
  type: 'line',
  data: this.lineData,
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: 'rgba(255, 255, 255, 0.05)' },
        ticks: { color: 'lightcyan' }
      },
      x: {
        grid: { display: false },
        ticks: { color: 'lightcyan' }
      }
    },
    plugins: {
      legend: { display: false }
    }
  }
};

chart:any

ngOnInit(): void {
  this.chart = new Chart("LineChart", this.lineConfig);
}




  };
















