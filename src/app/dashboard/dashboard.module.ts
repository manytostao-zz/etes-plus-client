import {NgModule} from '@angular/core';
import {ChartsModule} from 'ng2-charts/ng2-charts';

import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DevExtremeModule, DxButtonModule, DxTextBoxModule, DxTreeListModule} from 'devextreme-angular';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    DashboardRoutingModule,
    ChartsModule,
    FormsModule,
    DevExtremeModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule {
}
