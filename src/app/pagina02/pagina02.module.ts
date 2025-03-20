import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pagina02PageRoutingModule } from './pagina02-routing.module';

import { Pagina02Page } from './pagina02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pagina02PageRoutingModule
  ],
  declarations: [Pagina02Page]
})
export class Pagina02PageModule {}
