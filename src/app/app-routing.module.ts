import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'histoJour', loadChildren: './histo-jour/histo-jour.module#HistoJourPageModule' },
  { path: 'wellcome', loadChildren: './wellcome/wellcome.module#WellcomePageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
