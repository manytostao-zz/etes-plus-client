import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DashboardComponent} from './_components/dashboard/dashboard.component';
import {CrudTestComponent} from './crud-test/crud-test.component';
import {EntitySearchComponent} from './_components/entity-search/entity-search.component'

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
    path: 'crud-test',
    component: CrudTestComponent,
    data: {
      title: 'CRUD Test'
    }
  },
  {
    path: 'entity-search-test',
    component: EntitySearchComponent,
    data: {
      title: 'EntityS. Test'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
