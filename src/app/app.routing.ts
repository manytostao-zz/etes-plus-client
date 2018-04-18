import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DashboardComponent} from './_components';
import {SimpleLayoutComponent} from './_layout/containers/simple-layout';
import {FullLayoutComponent} from './_layout/containers/full-layout';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '', component: FullLayoutComponent,
    data: {title: 'Dashboard'},
    children: [
      {path: 'dashboard', component: DashboardComponent},
    ]
  },
  {
    path: 'nomenclatives',
    component: FullLayoutComponent,
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
