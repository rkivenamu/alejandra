import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pagina04PageRoutingModule } from './pagina04-routing.module';

import { Pagina04Page } from './pagina04.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pagina04PageRoutingModule
  ],
  declarations: [Pagina04Page]
})
export class Pagina04PageModule {}
