import {Component, Input, OnChanges} from '@angular/core';
import {BaseEntity} from '../../_model';
import * as Collections from 'typescript-collections';
import {CrudService} from '../crud/crud.service';

/**
 * Componente para listar entidades en forma de árbol
 *
 * @example
 *
 *<app-tree-list
 *ngIf="isTree"
 [keyField]="keyField"
 [entitiesListTree]="entitiesList"
 [multipleSelection]="multipleSelection">
 </app-tree-list>
 */
@Component({
  selector: 'app-tree-list',
  templateUrl: './tree-list.component.html',
  styleUrls: ['./tree-list.component.scss']
})
export class TreeListComponent implements OnChanges {
  /**
   * Define el campo clave del listado para establecer las reglas de selección de filas
   * @type: {string}
   */
  @Input() keyField: string;
  /**
   * Define si el listado será de tipo de selección múltiple
   * @type {boolean}
   */
  @Input() multipleSelection = true;
  /**
   * Define el listado de entidades que se mostrará en el componente
   * @type {LinkedList<BaseEntity>}
   */
  @Input() entitiesListTree = new Collections.LinkedList<BaseEntity>();
  /**
   * Contiene el arreglo de entidades que recibirá el componente dx-tree-list
   * @type {any[]}
   */
  listableTreeArray: any[] = [];
  /**
   * Contiene el arreglo de columnas que serán definidas para el componente dx-tree-list
   * @type {any[]}
   */
  columns: any[] = [];
  /**
   * Contiene el arreglo de entidades actualmente seleccionadas en el componente dx-tree-list
   * @type {any[]}
   */
  selectedEntities: any[] = [];
  /**
   * Constructor del componente
   * @param {CrudService} crudService
   */
  constructor(private crudService: CrudService<BaseEntity>) { }

  /**
   * Construye el listado por cada cambio detectado en las propiedades del componente
   */
   ngOnChanges() {

    // this.entitiesListTree = this.entitiesListTree === undefined ? this.crudService.getAll() : this.entitiesListTree;

    this.crudService.getAll()
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );

    this.buildTreeColumns();

    this.listableTreeArray = this.entitiesListTree.toArray();
  }

  buildTreeColumns() {
    const entity = this.entitiesListTree.first();

    for (const propertyKey in entity) {
      if (entity.hasOwnProperty(propertyKey)) {
        if (Reflect.hasMetadata('listable', entity, propertyKey)) {
          const listableMetadata = Reflect.getMetadata('listable', entity, propertyKey);
          if (listableMetadata.value) {
            let typeName = typeof entity[propertyKey];
            if (typeName === 'object') {
              typeName = entity[propertyKey].constructor.name;
            }
            const column = {name: propertyKey, type: typeName};
            column['visible'] = listableMetadata.visible;
            this.columns.push(column);
          }
        }
        if (Reflect.getMetadata('key', entity, propertyKey)) {
          this.keyField = propertyKey;
        }
      }
    }
  }
  handleSelectionChangedEvent(e) {
    this.selectedEntities = e.selectedRowsData;
    this.crudService.onEntitySelected.emit(this.selectedEntities);
  }

  handleContentReadyEvent(e) {
    if (!e.component.getSelectedRowKeys().length) {
      e.component.selectRowsByIndexes(0);
    }
  }

  getColumnWidth(type: string) {
    switch (type) {
      case 'string':
        return 160;
      case 'Date':
        return 150;
    }
  }

}
