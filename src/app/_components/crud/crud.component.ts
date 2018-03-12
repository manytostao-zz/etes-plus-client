import {Component, Input, OnInit} from '@angular/core';
import * as Collections from 'typescript-collections';

import {BaseEntity} from '../../_model';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  @Input() keyField = '';
  @Input() toolbarClass: string;
  @Input() toolbarItems: any[] = [];
  @Input() entitiesList = new Collections.LinkedList<BaseEntity>();
  @Input() entityType = '';
  selectedEntities: BaseEntity[];
  addEditEntity: any;
  popupVisible = false;

  constructor() {
  }

  ngOnInit() {
    if (this.entityType === '' && this.entitiesList.size() > 0) {
      this.entityType = this.entitiesList.first().constructor.name;
    }
  }

  handleEntitiesSelectedEvent($event: any) {
    this.selectedEntities = $event;
    if (this.selectedEntities.length === 1) {
      this.addEditEntity = this.selectedEntities[0];
    } else {
      this.addEditEntity = undefined;
    }
  }

  handleToolbarItemClicked($event: string) {
    switch ($event) {
      case 'add':
        break;
      case 'edit':
        this.addEditEntity = this.selectedEntities[0];
        this.popupVisible = true;
        break;
    }
  }
}
