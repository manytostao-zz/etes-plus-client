import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../_components/crud/crud.service';
import { EmployeeCrudService } from './employee-crud.service';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [{provide: CrudService, useClass: EmployeeCrudService}]
})
export class EmployeeComponent implements OnInit {
  toolbarItems: any[] = [];
  entityType = 'Employee';

  constructor() {
  }

  ngOnInit() {
    this.toolbarItems = [
      {
        locateInMenu: 'always',
        text: 'Print',
        onClick: () => {
          notify('Print option has been clicked!');
        },
        disableConditions: [
          {
            type: 'rowSelection',
            values: ['multiple']
          },
          {
            type: 'position',
            values: ['CDO', 'CGO']
          }
        ]
      },
      {
        locateInMenu: 'always',
        text: 'Settings',
        onClick: () => {
          notify('Settings option has been clicked!');
        },
        disableConditions: [
          {
            type: 'prefix',
            values: ['Ms.']
          }
        ]
      }
    ];
  }
}
