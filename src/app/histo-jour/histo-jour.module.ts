import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ChartsModule } from 'ng2-charts/charts/charts';
import { HistoJourPage } from './histo-jour.page';


const routes: Routes = [
  {
    path: '',
    component: HistoJourPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HistoJourPage]
})
export class HistoJourPageModule {}
