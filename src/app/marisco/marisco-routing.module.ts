import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MariscoPage } from './marisco.page';

const routes: Routes = [
  {
    path: '',
    component: MariscoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MariscoPageRoutingModule {}
