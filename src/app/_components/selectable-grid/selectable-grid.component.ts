import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import getPrototypeOf = Reflect.getPrototypeOf;
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-selectable-grid',
  templateUrl: './selectable-grid.component.html',
  styleUrls: ['./selectable-grid.component.scss']
})
export class SelectableGridComponent implements OnInit {
  @Input() entitiesList: any[] = [];
  @Output() entitiesSelectedEvent = new EventEmitter<any[]>();
  entityPropertiesList: any[] = [];
  selectedEntities: any[] = [];
  @Input() keyField: string;

  constructor() {
  }

  ngOnInit() {
    const entity = this.entitiesList[0];
    const listableProperties = getPrototypeOf(entity)['listable'];
    const entityPropertiesList = this.entityPropertiesList;
    listableProperties.forEach(function (property) {
      if (entity.hasOwnProperty(property)) {
        let typeName = typeof entity[property];
        if (typeName === 'object') {
          typeName = entity[property].constructor.name;
        }
        entityPropertiesList.push({name: property, type: typeName});
      }
    });
    console.log(entity);
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
