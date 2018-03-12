import {Component, Input, OnInit} from '@angular/core';

import {BaseEntity} from '../../_model';
import * as Collections from 'typescript-collections';
@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {
  @Input() entity: BaseEntity;
  @Input() editable = true;
  entityMetadata = new Collections.Dictionary<string, Collections.Dictionary<string, string[]>>();

  constructor() {
  }

  ngOnInit() {
    this.extractEntityMetadata();
  }

  extractEntityMetadata() {
    for (const field in this.entity) {
      if (this.entity.hasOwnProperty(field)) {
        if (Reflect.hasMetadata('category', this.entity, field)) {
          const category = Reflect.getMetadata('category', this.entity, field);
          if (!this.entityMetadata.containsKey(category)) {
            this.entityMetadata.setValue(category, new Collections.Dictionary<string, string[]>());
          }
          if (Reflect.hasMetadata('group', this.entity, field)) {
            const group = Reflect.getMetadata('group', this.entity, field);
            if (!this.entityMetadata.getValue(category).containsKey(group)) {
              this.entityMetadata.getValue(category).setValue(group, [field]);
            } else {
              this.entityMetadata.getValue(category).getValue(group).push(field)
            }
          } else {
            const group = '';
            if (!this.entityMetadata.getValue(category).containsKey(group)) {
              this.entityMetadata.getValue(category).setValue(group, [field]);
            } else {
              this.entityMetadata.getValue(category).getValue(group).push(field)
            }
          }
        }
      }
    }
  }
}
