import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() class: string;
  @Input() items: any[];
  @Input() crudToolbar: boolean;
  @Input() selectedEntities: any[] = [];
  @Output() onToolbarItemClickedEvent = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  setDisable(disableConditions: [{ type: string, values: any[] }]) {
    switch (this.crudToolbar) {
      case true:
        if (disableConditions === undefined) {
          return false;
        }
        if (disableConditions.length === 0) {
          return false;
        }
        let result = false;
        for (const condition of disableConditions) {
          if (condition.type === 'rowSelection') {
            for (const conditionValue of condition.values) {
              if (conditionValue === 'multiple') {
                result = !(this.selectedEntities !== undefined && this.selectedEntities !== [] && this.selectedEntities.length === 1);
              }
            }
          } else {
            if (this.selectedEntities === undefined) {
              break;
            }
            const entity = this.selectedEntities[0];
            for (const conditionValue of condition.values) {
              if (entity.hasOwnProperty(condition.type) && entity[condition.type] === conditionValue) {
                result = true;
              }
            }
          }
        }
        return result;
      default:
        return false;
    }
  }

  handleItemClickedEvent($event: any) {
    this.onToolbarItemClickedEvent.emit($event.itemData.type);
  }
}
