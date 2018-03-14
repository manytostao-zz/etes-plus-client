import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
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
  @Input() showToolbarDefaultButtons = true;
  @Input() showToolbarAcceptButton = false;
  @Input() showToolbarCancelButton = false;
  @Input() showToolbarAddButton = true;
  @Input() showToolbarEditButton = true;
  @Input() showToolbarRemoveButton = true;
  @Input() multipleSelection = true;
  @Output() onToolbarItemClicked = new EventEmitter<{ type: string, selectedEntities: BaseEntity[] }>();
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
      case 'edit':
        this.addEditEntity = this.selectedEntities[0];
        this.popupVisible = true;
        this.onToolbarItemClicked.emit({type: $event, selectedEntities: this.selectedEntities});
        break;
      default:
        this.onToolbarItemClicked.emit({type: $event, selectedEntities: this.selectedEntities});
        break;
    }
  }
}
