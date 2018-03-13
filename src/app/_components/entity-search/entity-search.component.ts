import {Component, Input, OnInit} from '@angular/core';
import {Employee} from '../../crud-test/model/employee.model';
import notify from 'devextreme/ui/notify';
import * as Collections from 'typescript-collections';
import {BaseEntity} from '../../_model';

@Component({
  selector: 'app-entity-search',
  templateUrl: './entity-search.component.html',
  styleUrls: ['./entity-search.component.scss']
})
export class EntitySearchComponent implements OnInit {
  @Input() entityName: string;
  toolbarItems: any[] = [];
  selectedEntities: BaseEntity[];
  addEditEntity: any;
  entitiesList = new Collections.LinkedList<BaseEntity>();
  entityType = '';
  popupVisible = false;
  popupVisibleAdd = false;

  constructor() {
  }

  ngOnInit() {
    this.entitiesList.add(
      new Employee(
        '1',
        'Osmany',
        'Torres Leyva',
        'Mr.',
        'CEO',
        'adasdasdwqer',
        new Date(),
        new Date(),
        'Notas',
        '31A #2609',
        'Playa',
        'La Habana'
      )
    );

    this.entitiesList.add(
      new Employee(
        '2',
        'Ana Liz',
        'García Meriño',
        'Ms.',
        'CGO',
        'adasdasdwqer',
        new Date(),
        new Date(),
        'Notas',
        '31A #2609',
        'Playa',
        'La Habana'
      )
    );

    this.entitiesList.add(
      new Employee(
        '3',
        'Oscar',
        'Torres Leyva',
        'Mr.',
        'CDO',
        'adasdasdwqer',
        new Date(),
        new Date(),
        'Notas',
        '31A #2609',
        'Playa',
        'La Habana'
      )
    );
  }

  openEntitySearch() {
    this.popupVisible = true;
  }

  saveEntity() {

  }

  newEntitySearch() {

    this.popupVisibleAdd = true;
  }
}
