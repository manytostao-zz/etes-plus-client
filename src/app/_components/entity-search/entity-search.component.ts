import {Component, Input, OnInit, ViewChild} from '@angular/core';

import {BaseEntity} from '../../_model';
import {Certificate} from '../../crud-test/model/certificate.model';

/**
 * Componente que permite acceder al crud de la entitdad, o crear una nueva entidad
 *
 * @example
 *
 * <app-entity-search
 *             entityType="Employee"
 *             [properties]="['code']"
 *             [entityType]="'Certificate'">
 * </app-entity-search>
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
   * Define si el componente {@link EntitySearchComponent} se mostrará editable
   * @type (boolean)
   */
  @Input() disabled: boolean;

  /**
   * Define las propiedades de la entidad que requiere se muestren en input del {@link EntitySearchComponent}
   * @type {[string,string]}
   */
  @Input() properties: any[] = ['code', 'description'];

  /**
   *  Referencia al elemento input de la vista
   */
  @ViewChild('entitySearchTextBox') entitySearchTextBox;

  /**
   * Contiene la entidad seleccionada en el componente {@link CrudComponent} que maneja el {@link EntitySearchComponent}
   */
  @Input() selectedEntity: BaseEntity;

  /**
   * Define la entidad que controla el el componente {@link AddEditComponent} que maneja el {@link EntitySearchComponent}
   */
  addEditEntity: any;

  /**
   *  Controla si se muestra la ventana modal que contiene un componente {@link CrudComponent} para seleccionar una entidad
   * @type {boolean}
   */
  crudPopupVisible = false;

  /**
   * Controla si se muestra la ventana modal que contiene un componente {@link AddEditComponent} para adicionar una entidad
   * @type {boolean}
   */
  addEditPopupVisible = false;

  /**
   * Define si será mostrado el botón *Agregar* en el componente
   * @type {boolean}
   */
  @Input() showAddButton = false;

  /**
   * Define si será mostrado el botón *Buscar* en el componente
   * @type {boolean}
   */
  @Input() showSearchButton = false;

  /**
   * Define si será mostrado el botón *Eliminar* en el componente
   * @type {boolean}
   */
  @Input() showRemoveButton = false;

  /**
   *  Maneja la suscripción al evento (onToolbarItemClicked) del componente (@link CrudComponent)
   * @param $event
   */
  handleToolbarItemClickedEvent($event) {
    switch ($event.type) {
      case 'accept':
        this.selectedEntity = $event.selectedEntities[0];
        this.crudPopupVisible = false;
        break;
      case 'cancel':
        this.crudPopupVisible = false;
        break;
      default:
        break;
    }
  }

  /**
   * Crea una nueva entidad y abre el modal con el componente {@link AddEditComponent}
   */
  createEntity() {
    this.addEditEntity = new Certificate(
      null,
      null,
      null);
    this.addEditPopupVisible = true;
  }

  /**
   * Abre el modal con el componente {@link CrudComponent}
   */
  searchEntity() {
    this.crudPopupVisible = true;
  }

  /**
   * Limpia la entidad seleccionada
   */
  removeEntity() {
    this.entitySearchTextBox.value = undefined;
  }


  getTextBoxDisplayValue() {
    let displayValue = '';
    if (this.selectedEntity !== undefined && this.selectedEntity !== null) {
      if (this.properties.length > 1) {
        for (let i = 1; i < this.properties.length; i++) {
          displayValue += ' - ' + this.selectedEntity[this.properties[i]];
        }
      } else {
        displayValue = this.selectedEntity[this.properties[0]];
      }
    }
    return displayValue;
  }
}
