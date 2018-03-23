import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-entity-field',
  templateUrl: './entity-field.component.html',
  styleUrls: ['./entity-field.component.scss']
})
export class EntityFieldComponent implements OnInit {
  /**
   *  Define la localización de la entidad.
   * @type {string}
   */
  @Input() entityLocation = '../../crud-test/model/employee.model';

  /**
   *  Define el nombre de la entidad.
   * @type {string}
   */
  @Input() entityName = 'Employee';

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
  async getTextBoxDisplayValue() {
    let url = this.entityLocation;
    let widgets;
    // Soluciones provisionales a la importación dinámica. Debe estar de mayor (../../../) a menor (../).

    if (url.startsWith('../../../')) {
      url = url.substr(9)
      widgets = await import(`../../../${url}`);
    }
    if (url.startsWith('../../')) {
      url = url.substr(6)
      widgets = await import(`../../${url}`);
    }
    if (url.startsWith('../')) {
      url = url.substr(6)
      widgets = await import(`../${url}`);
    }
    if (url.startsWith('./')) {
      url = url.substr(2)
      widgets = await import(`./${url}`);
    }

    let widgetInstance;
    widgetInstance = new widgets[this.entityName]();
    this.dataSourceTreeEntityField = Object.getOwnPropertyNames(widgetInstance);

  }


}
