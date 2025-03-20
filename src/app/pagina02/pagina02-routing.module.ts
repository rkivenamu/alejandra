import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pagina02Page } from './pagina02.page';

const routes: Routes = [
  {
    path: '',
    component: Pagina02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pagina02PageRoutingModule {}
