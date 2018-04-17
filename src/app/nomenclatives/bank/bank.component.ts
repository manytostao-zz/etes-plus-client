import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../_components/crud/crud.service';
import { BankCrudService } from './bank-crud.service';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss'],
  providers: [{provide: CrudService, useClass: BankCrudService}]
})
export class BankComponent implements OnInit {
  toolbarItems: any[] = [];
  entityType = 'Bank';

  constructor() { }

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
        ]
      },
      {
        locateInMenu: 'always',
        text: 'Settings',
        onClick: () => {
          notify('Settings option has been clicked!');
        }
      }
    ];
  }

}
