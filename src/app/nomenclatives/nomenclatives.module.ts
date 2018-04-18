/*
 * Copyright (c) 2018. DATYS Soluciones Tecnológicas
 */

import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {NomenclativesComponent} from './nomenclatives.component';
import {EmployeeComponent} from './employee/employee.component';
import {NomenclativesRoutingModule} from './nomenclatives-routing.module';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { BankComponent } from './bank/bank.component';

@NgModule({
  declarations: [
    EmployeeComponent,
    NomenclativesComponent,
    BankComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    HttpModule,
    NomenclativesRoutingModule
  ]
})
export class NomenclativesModule {
}
