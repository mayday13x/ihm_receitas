import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'rabanadas',
    loadChildren: () => import('./rabanadas/rabanadas.module').then( m => m.RabanadasPageModule)
  },
  {
    path: 'pescada',
    loadChildren: () => import('./pescada/pescada.module').then( m => m.PescadaPageModule)
  },
  {
    path: 'marisco',
    loadChildren: () => import('./marisco/marisco.module').then( m => m.MariscoPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
