import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DashboardComponent} from './_components';
import {SimpleLayoutComponent} from './_layout/containers/simple-layout';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'nomenclatives',
    component: SimpleLayoutComponent,
    // data: {title: 'Nomenclatives'},
    children: [
      {
        path: '',
        loadChildren: './nomenclatives/nomenclatives.module#NomenclativesModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
