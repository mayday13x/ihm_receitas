import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PescadaPageRoutingModule } from './pescada-routing.module';

import { PescadaPage } from './pescada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PescadaPageRoutingModule
  ],
  declarations: [PescadaPage]
})
export class PescadaPageModule {}
