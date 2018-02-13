import {Component, Input, OnInit} from '@angular/core';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-crud-toolbar',
  templateUrl: './crud-toolbar.component.html',
  styleUrls: ['./crud-toolbar.component.scss']
})
export class CrudToolbarComponent implements OnInit {
  @Input() items: any[];

  constructor() {
  }

  ngOnInit() {
    this.items = [{
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
