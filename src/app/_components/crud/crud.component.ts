import {Component, Input, OnInit} from '@angular/core';
import notify from 'devextreme/ui/notify';
import {Employee} from './model/employee.model';
import getPrototypeOf = Reflect.getPrototypeOf;

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  @Input() keyField = '';
  @Input() toolbarClass = 'navbar navbar-expand-lg navbar-light bg-light';
  @Input() toolbarItems: any[] = [];
  @Input() entitiesList: any[] = [];
  selectedEntities: any[];

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

    const employee1 = new Employee(
      1,
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
    );

    this.entitiesList.push(
      employee1,
      new Employee(
        2,
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
      ),
      new Employee(
        3,
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

  onEntitiesSelected($event: any) {
    this.selectedEntities = $event;
  }
}
