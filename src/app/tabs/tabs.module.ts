import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { ProfilePageModule } from '../profile/profile.module';
import { JeuxPageModule } from '../jeux/jeux.module';
import { HomePageModule } from '../home/home.module';
import { ArticlePageModule } from '../article/article.module';
import { from } from 'rxjs';
import { WellcomePage } from '../wellcome/wellcome.page'
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
   // WellcomePage,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    JeuxPageModule,
    ProfilePageModule,
    ArticlePageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
