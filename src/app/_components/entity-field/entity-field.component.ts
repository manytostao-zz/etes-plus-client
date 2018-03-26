import {Component, Input, OnInit} from '@angular/core';
import * as ModelsClassesMap from '../../_model/model-map';

@Component({
  selector: 'app-entity-field',
  templateUrl: './entity-field.component.html',
  styleUrls: ['./entity-field.component.scss']
})
export class EntityFieldComponent implements OnInit {

  /**
   *  Define el nombre de la entidad.
   * @type {string}
   */
  @Input() entityName = 'Certificate';

  /**
   * Define el datasource que recibe el lookup
   */
  dataSourceTreeEntityField: any;


  constructor() {
  }

  ngOnInit() {

    this.getTextBoxDisplayValue();

  }

  /**
   * Muestra en el input del {@link EntityFieldComponent} los valores de las propiedades de la entidad pasada como parámetros.
   * @returns {Promise<void>}
   */
  getTextBoxDisplayValue() {
    let widgetInstance;
    widgetInstance = new ModelsClassesMap[this.entityName]();
    this.dataSourceTreeEntityField = Object.getOwnPropertyNames(widgetInstance);

  }


}
