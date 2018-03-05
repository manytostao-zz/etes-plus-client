import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import * as Collections from 'typescript-collections';

import {BaseEntity} from '../../_model';

@Component({
  selector: 'app-selectable-grid',
  templateUrl: './selectable-grid.component.html',
  styleUrls: ['./selectable-grid.component.scss']
})
export class SelectableGridComponent implements OnChanges {
  @Input() keyField: string;
  @Input() entitiesList = new Collections.LinkedList<BaseEntity>();
  @Output() entitiesSelectedEvent = new EventEmitter<any[]>();
  listableArray: any[] = [];
  columns: any[] = [];
  selectedEntities: any[] = [];

  constructor() {
  }

  ngOnChanges() {
    this.buildGridColumns();
    this.listableArray = this.entitiesList.toArray();
  }

  buildGridColumns() {
    const entity = this.entitiesList.first();

    for (const propertyKey in entity) {
      if (entity.hasOwnProperty(propertyKey)) {
        if (Reflect.getMetadata('listable', entity, propertyKey)) {
          let typeName = typeof entity[propertyKey];
          if (typeName === 'object') {
            typeName = entity[propertyKey].constructor.name;
          }
          this.columns.push({name: propertyKey, type: typeName});
        }
        if (Reflect.getMetadata('key', entity, propertyKey)) {
          this.keyField = propertyKey;
        }
      }
    }
  }

  onSelectionChanged(e) {
    this.selectedEntities = e.selectedRowsData;
    this.entitiesSelectedEvent.emit(this.selectedEntities);
  }

  contentReady(e) {
    if (!e.component.getSelectedRowKeys().length) {
      e.component.selectRowsByIndexes(0);
    }
  }

  getColumnWidth(type: string) {
    switch (type) {
      case 'string':
        return 100;
      case 'Date':
        return 200;
    }
  }
}
