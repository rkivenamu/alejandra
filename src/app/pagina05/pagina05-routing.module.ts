import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pagina05Page } from './pagina05.page';

const routes: Routes = [
  {
    path: '',
    component: Pagina05Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pagina05PageRoutingModule {}
