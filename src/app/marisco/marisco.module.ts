import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MariscoPageRoutingModule } from './marisco-routing.module';

import { MariscoPage } from './marisco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MariscoPageRoutingModule
  ],
  declarations: [MariscoPage]
})
export class MariscoPageModule {}
