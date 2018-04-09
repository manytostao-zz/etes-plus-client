/*
 * Copyright (c) 2018. DATYS Soluciones Tecnológicas
 */

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {EmployeeComponent} from './employee/employee.component';
import {NomenclativesComponent} from './nomenclatives.component';

const nomenclativesRoutes: Routes = [
  {
    path: '',
    component: NomenclativesComponent,
    data: {title: 'Nomenclatives'},
    children: [
      {
        path: 'employee',
        component: EmployeeComponent,
        data: {title: 'Employee'}
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(nomenclativesRoutes)],
  exports: [RouterModule]
})
export class NomenclativesRoutingModule {
}
