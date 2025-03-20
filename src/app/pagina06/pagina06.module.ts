import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pagina06PageRoutingModule } from './pagina06-routing.module';

import { Pagina06Page } from './pagina06.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pagina06PageRoutingModule
  ],
  declarations: [Pagina06Page]
})
export class Pagina06PageModule {}
