import { ComponentFixture } from '@angular/core/testing';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';


Chart.register(...registerables)

@Component({
  selector: 'app-chart2',
  imports: [],
  templateUrl: './chart_2.component.html',
  styleUrl: './chart_2.component.css',
})
export class Chart1 implements OnInit  {



  constructor(private cd:ChangeDetectorRef){}

  data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  datasets: [{
    label: 'Totell Revenwe In This Month',
    data: [65, 59, 80, 81, 56, 55, 40 , 72 , 54 ],
    backgroundColor:(context:any) => {
      const chart = context.chart;
      const {ctx  , chartArea} = chart;
      if (!chartArea) return ;
      const gredient = ctx.createLinearGradient(0 , chartArea.bottom , 0 , chartArea.top)
      gredient.addColorStop(0 , "#22c55e");
      gredient.addColorStop(1 , "#0ea5e9");
      return gredient;
    },
    borderRadius: 8, // Rounded corners
    barThickness: 20,
  }]
};




  config :any = {
  type: 'bar',
  data: this.data,
  options: {
    responsive: true, // تفعيل التجاوب مع حجم الحاوية
    maintainAspectRatio: false, // يسمح للشارت بتغيير طوله وعرضه بحرية
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      }
    }
  },
};

HelloChart :any

  ngOnInit(): void {



    this.HelloChart = new Chart("Chart" , this.config)



  }


}
