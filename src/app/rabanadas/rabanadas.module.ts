import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RabanadasPageRoutingModule } from './rabanadas-routing.module';

import { RabanadasPage } from './rabanadas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RabanadasPageRoutingModule
  ],
  declarations: [RabanadasPage]
})
export class RabanadasPageModule {}
