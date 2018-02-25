import {Component, Input, OnInit} from '@angular/core';
import notify from 'devextreme/ui/notify';
import {Employee} from './model/employee.model';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  @Input() keyField = 'id';
  @Input() toolbarClass = 'navbar navbar-expand-lg navbar-light bg-light';
  @Input() toolbarItems: any[] = [];
  @Input() entitiesList: any[] = [];
  selectedEntities: any[];

  constructor() {
  }

  ngOnInit() {
    this.toolbarItems = [{
      location: 'before',
      widget: 'dxButton',
      options: {
        icon: 'plus',
        onClick: () => {
          notify('New button has been clicked!');
        }
      }
    },
      {
        location: 'before',
        widget: 'dxButton',
        locateInMenu: 'auto',
        options: {
          icon: 'edit',
          onClick: () => {
            notify('Edit button has been clicked!');
          }
        }
      },
      {
        location: 'before',
        widget: 'dxButton',
        locateInMenu: 'auto',
        options: {
          icon: 'remove',
          onClick: () => {
            notify('Remove button has been clicked!');
          }
        }
      },
      {
        locateInMenu: 'always',
        text: 'Print',
        onClick: () => {
          notify('Print option has been clicked!');
        }
      },
      {
        locateInMenu: 'always',
        text: 'Settings',
        onClick: () => {
          notify('Settings option has been clicked!');
        }
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
      ),
      new Employee(
        3,
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
  }

  onEntitiesSelected($event: any) {
    this.selectedEntities = $event;
  }
}
