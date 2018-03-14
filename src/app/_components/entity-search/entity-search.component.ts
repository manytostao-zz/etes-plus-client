import {Component, Input, ViewChild, OnInit, ElementRef} from '@angular/core';
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
  @Input() propertyName: any[] = ['firstName', 'lastName'];
  @ViewChild('nameEntitySearch') nameEntitySearch;
  toolbarItems: any[] = [];
  /*selectedEntity: BaseEntity;*/
  selectedEntity: string;
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

  acceptEventClick($event) {
    switch ($event.type) {
      case 'accept':
        if (this.propertyName.length === 1) {
          this.selectedEntity = $event.selectedEntities[0][this.propertyName[0]];
        } else if (this.propertyName.length > 1) {
          this.selectedEntity = $event.selectedEntities[0][this.propertyName[0]] + ' - ' + $event.selectedEntities[0][this.propertyName[1]];
        }
        this.popupVisible = false;
        this.nameEntitySearch.value = this.selectedEntity;
        break;
      default:
        break;
    }
  }

  newEntitySearch() {
    this.addEditEntity = new Employee('', 'das', '', '', '', '', new Date, new Date , '', '', '', '');
    this.popupVisibleAdd = true;
  }

  trashEntitySearch() {
        this.nameEntitySearch.value = '';
  }
}
