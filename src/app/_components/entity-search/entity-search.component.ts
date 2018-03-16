import {Component, Input, ViewChild} from '@angular/core';
import {BaseEntity} from '../../_model';


/**
 * Componente que permite acceder al crud de la entitdad, o crear una nueva entidad
 *
 * @example
 *
 *  <app-entity-search
 *    entityType="Employee"
 *    [properties]="['code']">
 *  </app-entity-search>
 */
@Component({
  selector: 'app-entity-search',
  templateUrl: './entity-search.component.html',
  styleUrls: ['./entity-search.component.scss']
})
export class EntitySearchComponent {

  /**
   * Define el tipo de las entidades que manejará el {@link CrudComponent}
   * @type {string}
   */
  @Input() entityType: string;

  /**
   * Define si el campo entity-search se mostrará editable o no
   * @type (boolean)
   */
  @Input() disabled: boolean;

  /**
   * Define las propiedes de la entidad que requiere se muestren en input del entity-search
   * @type {[string,string]}
   */
  @Input() properties: any[] = ['code', 'description'];


  /**
   *  Define el nombre del input, con el cual se hace el binding entre la vista y el componente.
   */
  @ViewChild('entitySearchTextBox') entitySearchTextBox;

  /**
   * Almacena las propiedades de la entidad que te envian como parámetro al utilizar el componente entity-search
   */
  selectedEntity: BaseEntity;

  /**
   * Recibe la entidad para manejar el componente entity-search
   */
  addEditEntity: any;

  /**
   *  Define la visibilidad del popup que muestra el crud. Por defecto si inicializa en false.
   * @type {boolean}
   */
  crudPopupVisible = false;

  /**
   * Define la visibilidad del popup que muestra el addEdit. Por defecto si inicializa en false.
   * @type {boolean}
   */
  addEditPopupVisible = false;

  /**
   *  Maneja la suscripción al evento (onToolbarItemClicked) del componente (@link CrudComponent)
   * @param $event
   */
  handleToolbarItemClickedEvent($event) {
    switch ($event.type) {
      case 'accept':
        this.selectedEntity = $event.selectedEntities[0];
        this.entitySearchTextBox.value = this.selectedEntity[this.properties[0]];
        if (this.properties.length > 1) {
          for (let i = 1; i < this.properties.length; i++) {
            this.entitySearchTextBox.value += ' - ' + this.selectedEntity[this.properties[i]];
          }
        }
        this.crudPopupVisible = false;
        break;
      default:
        break;
    }
  }

  /**
   * Método que maneja la operación de crear una nueva entidad.
   */
  createEntity() {
  }

  /**
   * Método que maneja la operación de abrir el crud de la entidad.
   */
  searchEntity() {
    this.crudPopupVisible = true;
  }

  /**
   * Método que maneja la operación de abrir el limpiar el input.
   */
  removeEntity() {
    this.entitySearchTextBox.value = undefined;
  }
}
