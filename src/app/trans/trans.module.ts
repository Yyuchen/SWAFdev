import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {TransLoc} from "./trans.page";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TransLoc
  ],
  declarations: [TransLoc]
})
export class AboutPageModule {}
