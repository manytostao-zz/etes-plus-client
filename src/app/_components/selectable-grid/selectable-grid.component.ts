import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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

  constructor() {
  }

  ngOnInit() {
    const entity = this.entitiesList[0];
    for (const key in entity) {
      if (entity.hasOwnProperty(key)) {
        let typeName = typeof entity[key];
        if (typeName === 'object') {
          typeName = entity[key].constructor.name;
        }
        this.entityPropertiesList.push({name: key, type: typeName});
      }
    }
  }


  contentReady(e) {
    if (!e.component.getSelectedRowKeys().length) {
      e.component.selectRowsByIndexes(0);
    }
  }

  onSelectionChanged(e) {
    this.selectedEntities = e.selectedRowsData;
    this.entitiesSelectedEvent.emit(this.selectedEntities);
  }

  getColumnWidth(type: string) {
    switch (type) {
      case 'string':
        return 80;
      case 'Date':
        return 150;
    }
  }
}
