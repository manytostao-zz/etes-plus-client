import {Component, OnInit} from '@angular/core';
import {Employee} from './model/employee.model';
import notify from 'devextreme/ui/notify';
import * as Collections from 'typescript-collections';
import {BaseEntity} from '../_model';

@Component({
  selector: 'app-crud-test',
  templateUrl: './crud-test.component.html',
  styleUrls: ['./crud-test.component.scss']
})
export class CrudTestComponent implements OnInit {
  toolbarItems: any[] = [];
  entitiesList = new Collections.LinkedList<BaseEntity>();
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
