import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pagina06Page } from './pagina06.page';

const routes: Routes = [
  {
    path: '',
    component: Pagina06Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pagina06PageRoutingModule {}
