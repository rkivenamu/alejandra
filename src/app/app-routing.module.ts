import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pagina1',
    loadChildren: () => import('./pagina1/pagina1.module').then( m => m.Pagina1PageModule)
  },
  {
    path: 'pagina04',
    loadChildren: () => import('./pagina04/pagina04.module').then( m => m.Pagina04PageModule)
  },
  {
    path: 'pagina05',
    loadChildren: () => import('./pagina05/pagina05.module').then( m => m.Pagina05PageModule)
  },
  {
    path: 'pagina06',
    loadChildren: () => import('./pagina06/pagina06.module').then( m => m.Pagina06PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
