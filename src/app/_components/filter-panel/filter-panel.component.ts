///<reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, Input, OnInit} from '@angular/core';
import * as ModelsClassesMap from '../../_model/model-map';
import {BaseEntity} from '../../_model';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss']
})
export class FilterPanelComponent implements OnInit {

  /**
   *  Define el nombre de la entidad.
   * @type {string}
   */
  @Input() entityName = 'Employee';

  /**
   *  Define la entidad.
   * @type {BaseEntity}
   */
  filterInstance: BaseEntity;

  /**
   *  Define un arreglo de informacion compuesto por el nombre del atributo, el tipo de dato y el nombre del campo.
   */
  fieldsFilterMetadata: { name: string, datatype: string, fieldname: string }[] = new Array();

  /**
   *  Define un arreglo de operadores para el filtrado de los tipos de datos strings.
   */
  filterStringAttributes: any =
    [
      {'ID': '=', 'Name': 'Equal'},
      {'ID': '<>', 'Name': 'NotEqual'},
      {'ID': 'contains', 'Name': 'Contains'},
      {'ID': 'notcontains', 'Name': 'NotContains'},
      {'ID': 'startswith', 'Name': 'StartsWith'},
      {'ID': 'endswith', 'Name': 'EndsWith'}
    ];

  /**
   *  Define un arreglo de operadores para el filtrado de los tipos de datos date.
   */
  filterDateAttributes: any =
    [
      {'ID': '=', 'Name': 'Equal'},
      {'ID': '<>', 'Name': 'NotEqual'},
      {'ID': '<', 'Name': 'LessThan'},
      {'ID': '<=', 'Name': 'LessThanOrEqual'},
      {'ID': '>', 'Name': 'GreaterThan'},
      {'ID': '>=', 'Name': 'GreaterThanOrEqual'},
      {'ID': 'between', 'Name': 'Between'}
    ];

  /**
   *  Define un arreglo de operadores para el filtrado de los tipos de datos number.
   */
  filterNumberAttributes: any =
    [
      {'ID': '=', 'Name': 'Equal'},
      {'ID': '<>', 'Name': 'NotEqual'},
      {'ID': '<', 'Name': 'LessThan'},
      {'ID': '<=', 'Name': 'LessThanOrEqual'},
      {'ID': '>', 'Name': 'GreaterThan'},
      {'ID': '>=', 'Name': 'GreaterThanOrEqual'},
      {'ID': 'between', 'Name': 'Between'}
    ];

  /**
   * Define el datasource que recibe el lookup
   */
  constructor() {
  }


  /**
   * Inicializa el componente
   */
  ngOnInit() {
    this.getNameFromClassMap();
  }

  /**
   * funcion que devielve la entidad para crear el componente
   */
  getNameFromClassMap() {
    this.filterInstance = new ModelsClassesMap[this.entityName]();
    this.extractEntityFilterMetadata();
  }

  /**
   * funcion que extrae de la entidad los metadatos e inforacion adicional para ponerla en el arreglo fieldsFilterMetadata
   */
  extractEntityFilterMetadata() {
    for (const field in this.filterInstance) {
      if (this.filterInstance.hasOwnProperty(field)) {
        if (Reflect.hasMetadata('filterable', this.filterInstance, field)) {
          const filter = Reflect.getMetadata('filterable', this.filterInstance, field);
          // cosnt name = camelCaseToTitleCase(field);
          this.fieldsFilterMetadata.push({'name': this.camelCaseToTitleCase(field), 'datatype': filter, 'fieldname': field});
        }
      }
    }
  }

  /**
   * funcion que convierte el field en un posible nombre para q se muestre bien como campo
   */
  camelCaseToTitleCase(in_camelCaseString: string) {
    const result: string = in_camelCaseString
      .replace(/([a-z])([A-Z][a-z])/g, '$1 $2')
      .replace(/([A-Z][a-z])([A-Z])/g, '$1 $2')
      .replace(/([a-z])([A-Z]+[a-z])/g, '$1 $2')
      .replace(/([A-Z]+)([A-Z][a-z][a-z])/g, '$1 $2')
      .replace(/([a-z]+)([A-Z0-9]+)/g, '$1 $2')
      // Note: the next regex includes a special case to exclude plurals of acronyms, e.g. "ABCs"
      .replace(/([A-Z]+)([A-Z][a-rt-z][a-z]*)/g, '$1 $2')
      .replace(/([0-9])([A-Z][a-z]+)/g, '$1 $2')
      .replace(/([A-Z]+)([0-9]+)/g, '$1 $2')
      .replace(/([0-9]+)([A-Z]+)/g, '$1 $2')
      .trim();

    // capitalize the first letter
    return result.charAt(0).toUpperCase() + result.slice(1);
  }

  /**
   * funcion que reinicia los input a su estado original
   */
  onReset() {
    for (const fI of this.fieldsFilterMetadata) {
        this.filterInstance[fI.fieldname] = null;
    }
  }
}
