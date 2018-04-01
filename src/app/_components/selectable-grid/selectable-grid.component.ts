import {Component, Inject, Input, OnChanges} from '@angular/core';
import {Http} from '@angular/http';
import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';
import * as Collections from 'typescript-collections';
import 'rxjs/add/operator/toPromise';

import {CrudService} from '../crud/crud.service';
import {BaseEntity} from '../../_model';

/**
 * Componente para listar entidades
 *
 * @example
 *
 * <app-selectable-grid
 *              [keyField]="keyField"
 *              [entitiesList]="entitiesList"
 *              [editable]="editableGrid"
 *              [multipleSelection]="multipleSelection">
 * </app-selectable-grid>
 */
@Component({
  selector: 'app-selectable-grid',
  templateUrl: './selectable-grid.component.html',
  styleUrls: ['./selectable-grid.component.scss'],
})
export class SelectableGridComponent implements OnChanges {

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
  @Input() entitiesList = new Collections.LinkedList<BaseEntity>();

  /**
   * Define si el listado contendrá celdas editables
   * @type {boolean}
   */
  @Input() editable = false;

  /**
   * Contiene el arreglo de entidades que recibirá el componente dx-data-grid
   * @type {any[]}
   */
  listableArray: any[] = [];

  /**
   * Contiene el arreglo de columnas que serán definidas para el componente dx-data-grid
   * @type {any[]}
   */
  columns: any[] = [];

  /**
   * Contiene el arreglo de entidades actualmente seleccionadas en el componente dx-data-grid
   * @type {any[]}
   */
  selectedEntities: any[] = [];

  /**
   * Contiene la fuente de datos del componente dx-data-grid
   * @type {{}}
   */
  dataSource: any = {};

  /**
   * Constructor del componente
   * @param {CrudService} crudService
   */
  constructor(private crudService: CrudService) {
    // const dataSourceConfiguration = {
    //   load: function (loadOptions: any) {
    //     console.log(loadOptions);
    //     return crudService.getEntitiesList().toPromise()
    //       .then(response => {
    //         const data = response.toArray();
    //         const totalCount = response.size();
    //
    //         console.log(data, totalCount);
    //         return {data: data, totalCount: totalCount}
    //       })
    //       .catch(error => {
    //         throw new Error('Data loading error');
    //       });
    //     // return http.get('a').toPromise()
    //     //   .then(response => {
    //     //     console.log(response)
    //     //   }).catch(error => {
    //     //     console.log(error)
    //     //   });
    //   },
    //   onLoaded: function () {
    //     console.log('Data loaded');
    //   },
    //   onLoading: function () {
    //     console.log('Data loading');
    //   }
    // };
    //
    // this.dataSource = new CustomStore(dataSourceConfiguration);
  }

  /**
   * Construye el listado por cada cambio detectado en las propiedades del componente
   */
  ngOnChanges() {

    this.entitiesList = this.entitiesList === undefined ? this.crudService.getEntitiesList() : this.entitiesList;

    this.buildGridColumns();

    this.listableArray = this.entitiesList.toArray();
  }

  buildGridColumns() {
    const entity = this.entitiesList.first();

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
            column['editable'] = listableMetadata.editable;
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
        return 100;
      case 'Date':
        return 200;
    }
  }
}
