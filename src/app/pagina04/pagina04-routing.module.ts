import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pagina04Page } from './pagina04.page';

const routes: Routes = [
  {
    path: '',
    component: Pagina04Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pagina04PageRoutingModule {}
