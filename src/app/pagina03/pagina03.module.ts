import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pagina03PageRoutingModule } from './pagina03-routing.module';

import { Pagina03Page } from './pagina03.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pagina03PageRoutingModule
  ],
  declarations: [Pagina03Page]
})
export class Pagina03PageModule {}
