import { Routes } from '@angular/router';
import { AnalysisComponent } from '../component/Analysis/Analysis.component';
import { AdsComponent } from '../component/Ads/Ads.component';
import { ProductComponent } from '../component/Product/Product.component';

export const routes: Routes = [




  {path:"", redirectTo:"Analysis", pathMatch:"full"},


{path:"Analysis" , component:AnalysisComponent},

{path:"Product" , component:ProductComponent},

{path:"Ads" , component:AdsComponent},


];
