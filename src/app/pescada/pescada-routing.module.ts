import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PescadaPage } from './pescada.page';

const routes: Routes = [
  {
    path: '',
    component: PescadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PescadaPageRoutingModule {}
