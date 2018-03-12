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
  entityType = '';

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

    this.entitiesList.add(
      new Employee(
        '1',
        'Osmany',
        'Torres Leyva',
        'Mr.',
        'CEO',
        'adasdasdwqer',
        new Date(),
        new Date(),
        'Notas',
        '31A #2609',
        'Playa',
        'La Habana'
      )
    );

    this.entitiesList.add(
      new Employee(
        '2',
        'Ana Liz',
        'García Meriño',
        'Ms.',
        'CGO',
        'adasdasdwqer',
        new Date(),
        new Date(),
        'Notas',
        '31A #2609',
        'Playa',
        'La Habana'
      )
    );

    this.entitiesList.add(
      new Employee(
        '3',
        'Oscar',
        'Torres Leyva',
        'Mr.',
        'CDO',
        'adasdasdwqer',
        new Date(),
        new Date(),
        'Notas',
        '31A #2609',
        'Playa',
        'La Habana'
      )
    );
  }

}
