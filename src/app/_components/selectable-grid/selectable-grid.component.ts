import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import getPrototypeOf = Reflect.getPrototypeOf;
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-selectable-grid',
  templateUrl: './selectable-grid.component.html',
  styleUrls: ['./selectable-grid.component.scss']
})
export class SelectableGridComponent implements OnInit {
  @Input() keyField: string;
  @Input() entitiesList: any[] = [];
  @Output() entitiesSelectedEvent = new EventEmitter<any[]>();
  columns: any[] = [];
  selectedEntities: any[] = [];

  constructor() {
  }

  ngOnInit() {
    this.buildGridColumns();
  }

  private buildGridColumns() {
    const entity = this.entitiesList[0];

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
