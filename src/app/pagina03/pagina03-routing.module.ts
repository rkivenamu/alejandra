import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pagina03Page } from './pagina03.page';

const routes: Routes = [
  {
    path: '',
    component: Pagina03Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pagina03PageRoutingModule {}
