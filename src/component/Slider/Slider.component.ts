import { AngularJSUrlCodec } from '@angular/common/upgrade';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";
import { Chart_1Component } from '../chart_1/chart_1.component';
import { AnalysisComponent } from "../Analysis/Analysis.component";
@Component({
  selector: 'app-Slider',
  templateUrl: './Slider.component.html',
  styleUrls: ['./Slider.component.css'],
  imports: [RouterLink, RouterOutlet, Chart_1Component]
})
export class SliderComponent  {

  constructor() { }






  getslide(){
const slide_hidden = document.getElementById('slide_hidden');
const slide_back  = document.getElementById('slide-back')
  slide_hidden?.classList.add('ActiveClass')

  }

getback(){
  const slide_hidden = document.getElementById('slide_hidden');
  slide_hidden?.classList.remove('ActiveClass')
}

}

