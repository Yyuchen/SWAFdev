import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { ProfilePageModule } from '../profile/profile.module';
import { AboutPageModule } from '../about/about.module';
import { HomePageModule } from '../home/home.module';
import { ArticlePageModule } from '../article/article.module';
import { from } from 'rxjs';
import {BlePageModule} from '../ble/ble.module';
import {ConnectPageModule} from '../connect/connect.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    AboutPageModule,
    ProfilePageModule,
    ArticlePageModule,
    BlePageModule,
    ConnectPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
