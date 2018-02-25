import {Component, Input, OnInit} from '@angular/core';
import getPrototypeOf = Reflect.getPrototypeOf;
import {camelize, isUpperCase} from 'tslint/lib/utils';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {
  @Input() entity: any;
  tabPanelItems: any[] = [];

  constructor() {
  }

  ngOnInit() {
    const tabPanelItems = this.tabPanelItems;
    getPrototypeOf(this.entity)['categories'].forEach(function (category) {
      const panelItem = {title: category.toUpperCase()};
      tabPanelItems.push(panelItem);
    });
  }

}
