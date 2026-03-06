import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Chart1 } from "../component/chart_2/chart_2.component";
import { Chart_1Component } from '../component/chart_1/chart_1.component';
import { Chart3 } from "../component/Chart-3/Chart-3.component";
import { SliderComponent } from "../component/Slider/Slider.component";
import { AnalysisComponent } from "../component/Analysis/Analysis.component";


@Component({
  selector: 'app-root',
  imports: [SliderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Dash');
}
