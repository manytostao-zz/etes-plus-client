import {Component, Input, ViewChild} from '@angular/core';

import {Employee} from '../../crud-test/model/employee.model';
import {BaseEntity} from '../../_model';


@Component({
  selector: 'app-entity-search',
  templateUrl: './entity-search.component.html',
  styleUrls: ['./entity-search.component.scss']
})
export class EntitySearchComponent {

  /**
   *
   */
  @Input() entityType: string;

  @Input() disabled: boolean;

  @Input() properties: any[] = ['code', 'description'];

  @ViewChild('entitySearchTextBox') entitySearchTextBox;

  selectedEntity: BaseEntity;

  addEditEntity: any;

  crudPopupVisible = false;

  addEditPopupVisible = false;

  handleToolbarItemClickedEvent($event) {
    switch ($event.type) {
      case 'accept':
        this.selectedEntity = $event.selectedEntities[0];
        this.entitySearchTextBox.value = this.selectedEntity[this.properties[0]];
        if (this.properties.length > 1) {
          for (let i = 1; i < this.properties.length; i++) {
            this.entitySearchTextBox.value += ' - ' + this.selectedEntity[this.properties[i]];
          }
        }
        this.crudPopupVisible = false;
        break;
      default:
        break;
    }
  }

  createEntity() {
  }

  searchEntity() {
    this.crudPopupVisible = true;
  }

  removeEntity() {
    this.entitySearchTextBox.value = '';
  }
}
