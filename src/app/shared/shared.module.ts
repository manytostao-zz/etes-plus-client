/*
 * Copyright (c) 2018. DATYS Soluciones Tecnológicas
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DevExtremeModule} from 'devextreme-angular';

import {
  CrudComponent,
  EntitySearchComponent,
  AddEditComponent,
  EntityFieldComponent,
  CustomFieldTemplateComponent,
  TreeListComponent,
  ToolbarComponent,
  SelectableGridComponent
} from '../_components';

const APP_COMPONENTS = [
  CrudComponent,
  EntitySearchComponent,
  AddEditComponent,
  EntityFieldComponent,
  CustomFieldTemplateComponent,
  TreeListComponent,
  ToolbarComponent,
  SelectableGridComponent
];

@NgModule({
  declarations: [
    ...APP_COMPONENTS
  ],
  imports: [
    DevExtremeModule,
    CommonModule
  ],
  exports: [
    CommonModule,
    DevExtremeModule,
    ...APP_COMPONENTS
  ]
})
export class SharedModule {
}
