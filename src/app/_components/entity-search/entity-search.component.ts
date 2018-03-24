import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

import {BaseEntity} from '../../_model';
import {Certificate} from '../../crud-test/model/certificate.model';

/**
 * Componente que permite acceder al crud de la entitdad, o crear una nueva entidad
 *
 * @example
 *
 * <app-entity-search
 *             [properties]="['code']"
 *             [entityType]="'Certificate'"
 *             [(selectedEntity)]="entity">
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
   * Contiene la entidad seleccionada en el componente {@link CrudComponent} que maneja el {@link EntitySearchComponent}
   */
  private _selectedEntity: BaseEntity;

  /**
   * Evento que se lanza cuando cambia el valor de la propiedad selectedEntity
   * @type {EventEmitter<BaseEntity>}
   */
  @Output() selectedEntityChange = new EventEmitter<BaseEntity>();

  /**
   * @ignore
   */
  @Input() get selectedEntity(): BaseEntity {

    return this._selectedEntity;
  }

  /**
   * @ignore
   */
  set selectedEntity(value: BaseEntity) {
    this._selectedEntity = value;
    this.selectedEntityChange.emit(this._selectedEntity);
  }

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
    if (this._selectedEntity !== undefined && this._selectedEntity !== null) {
      if (this.properties.length > 1) {
        for (let i = 1; i < this.properties.length; i++) {
          displayValue += ' - ' + this._selectedEntity[this.properties[i]];
        }
      } else {
        displayValue = this._selectedEntity[this.properties[0]];
      }
    }
    return displayValue;
  }
}
