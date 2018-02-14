import {Component, OnInit} from '@angular/core';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  toolbarClass: string = 'navbar navbar-expand-lg navbar-light bg-light';
  toolbarItems: any[];

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
  }

}
