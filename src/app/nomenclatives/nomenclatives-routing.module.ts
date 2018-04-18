/*
 * Copyright (c) 2018. DATYS Soluciones Tecnológicas
 */

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {EmployeeComponent} from './employee/employee.component';
import {NomenclativesComponent} from './nomenclatives.component';
import {BankComponent} from './bank/bank.component';

const nomenclativesRoutes: Routes = [
  {
    path: '',
    data: {title: 'Nomenclatives'},
    children: [
      {
        path: 'employee',
        component: EmployeeComponent,
        data: {title: 'Employee'}
      },
      {
        path: 'bank',
        component: BankComponent,
        data: {title: 'Bank'}
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(nomenclativesRoutes)],
  exports: [RouterModule]
})
export class NomenclativesRoutingModule {
}
