import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pagina05PageRoutingModule } from './pagina05-routing.module';

import { Pagina05Page } from './pagina05.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pagina05PageRoutingModule
  ],
  declarations: [Pagina05Page]
})
export class Pagina05PageModule {}
