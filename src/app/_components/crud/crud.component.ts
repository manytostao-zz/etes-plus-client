import {Component, OnInit} from '@angular/core';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  toolbarClass = 'navbar navbar-expand-lg navbar-light bg-light';
  toolbarItems: any[] = [];
  entitiesList: any[] = [];
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

    this.entitiesList.push(
      new Employee(
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
      ),
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
    console.log(this.selectedEntities);
  }
}

export class Employee {
  ID: number;
  FirstName: string;
  LastName: string;
  Prefix: string;
  Position: string;
  Picture: string;
  BirthDate: Date;
  HireDate: Date;
  Notes: string;
  Address: string;
  State: string;
  City: string;

  constructor(ID: number,
              FirstName: string,
              LastName: string,
              Prefix: string,
              Position: string,
              Picture: string,
              BirthDate: Date,
              HireDate: Date,
              Notes: string,
              Address: string,
              State: string,
              City: string) {
    this.ID = ID;
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.Prefix = Prefix;
    this.Position = Position;
    this.Picture = Picture;
    this.BirthDate = BirthDate;
    this.HireDate = HireDate;
    this.Notes = Notes;
    this.Address = Address;
    this.State = State;
    this.City = City
  }
}
