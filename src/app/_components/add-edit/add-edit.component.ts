import {Component, Input, OnInit} from '@angular/core';

import {BaseEntity} from '../../_model';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {
  @Input() entity: BaseEntity;
  tabPanelItems: any[] = [];

  constructor() {
  }

  ngOnInit() {
    this.buildCategories();
  }

  private buildCategories() {
    const tabPanelItems = this.tabPanelItems;
    const categories: string[] = [];

    for (const propertyKey in this.entity) {
      if (this.entity.hasOwnProperty(propertyKey)) {
        if (Reflect.hasMetadata('category', this.entity, propertyKey)) {
          const category = Reflect.getMetadata('category', this.entity, propertyKey);
          const categoryExists = categories.some((value) => {
            return value === category;
          });
          if (!categoryExists) {
            categories.push(category);
          }
        }
      }
    }

    categories.forEach(function (category) {
      const panelItem = {title: category.toUpperCase()};
      tabPanelItems.push(panelItem);
    });
  }
}
