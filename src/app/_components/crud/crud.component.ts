import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import * as Collections from 'typescript-collections';

import {BaseEntity} from '../../_model';

/**
 * Componente que genera elementos visuales para listar, crear, actualizar y eliminar entidades
 *
 * @example
 * <app-crud
 *             [entityType]="entityType"
 *             [entitiesList]="entitiesList"
 *             [multipleSelection]="false"
 *             [toolbarItems]="toolbarItems"
 *             [showToolbarDefaultButtons]="true"
 *             toolbarClass="navbar navbar-expand-lg navbar-light bg-light">
 * </app-crud>
 */
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  /**
   * Define el campo clave para ser utilizado por el componente {@link SelectableGridComponent}
   * @type {string}
   */
  @Input() keyField: string;
  /**
   * Define el tipo de las entidades que manejará el {@link CrudComponent}
   * @type {string}
   */
  @Input() entityType: string;
  /**
   * Define si serán mostrados los botones por defecto del componente {@link ToolbarComponent}
   * @type {boolean}
   */
  @Input() multipleSelection = true;
  /**
   * Evento lanzado cuando se interactúa con los elementos del {@link ToolbarComponent}
   * @type {EventEmitter<{type: string; selectedEntities: BaseEntity[]}>}
   */
  @Input() showToolbarDefaultButtons = true;
  /**
   * Define si será mostrado el botón *Aceptar* en el componente {@link ToolbarComponent}
   * @type {boolean}
   */
  @Input() showToolbarAcceptButton = false;
  /**
   * Define si será mostrado el botón *Cancelar* en el componente {@link ToolbarComponent}
   * @type {boolean}
   */
  @Input() showToolbarCancelButton = false;
  /**
   * Define si será mostrado el botón *Adicionar* en el componente {@link ToolbarComponent}
   * @type {boolean}
   */
  @Input() showToolbarAddButton = true;
  /**
   * Define si será mostrado el botón *Editar* en el componente {@link ToolbarComponent}
   * @type {boolean}
   */
  @Input() showToolbarEditButton = true;
  /**
   * Define si será mostrado el botón *Eliminar* en el componente {@link ToolbarComponent}
   * @type {boolean}
   */
  @Input() showToolbarRemoveButton = true;
  /**
   * Define las clases CSS a utilizar por el componente {@link ToolbarComponent}
   * @type {string}
   */
  @Input() toolbarClass: string;
  /**
   * Define los elementos (botones, etc.) que contendrá el componente {@link ToolbarComponent}
   * @type {any[]}
   */
  @Input() toolbarItems: any[] = [];
  /**
   * Define la colección de entidades que listará el componente {@link SelectableGridComponent}
   * @type {LinkedList<BaseEntity>}
   */
  @Input() entitiesList = new Collections.LinkedList<BaseEntity>();
  /**
   * Define si el dx-grid del componente {@link SelectableGridComponent} será de múltiple selección
   * @type {boolean}
   */
  @Output() onToolbarItemClicked = new EventEmitter<{ type: string, selectedEntities: BaseEntity[] }>();
  /**
   * Contiene el listado de entidades seleccionadas en el componente {@link SelectableGridComponent}
   */
  selectedEntities: BaseEntity[];
  /**
   * Contiene la entidad suministrada al componente {@link AddEditComponent}
   */
  addEditEntity: any;
  /**
   * Controla si se muestra la ventana modal que contiene un componente {@link AddEditComponent} para editar o adicionar una entidad
   * @type {boolean}
   */
  popupVisible = false;

  ngOnInit() {
    if (this.entityType === '' && this.entitiesList.size() > 0) {
      this.entityType = this.entitiesList.first().constructor.name;
    }
  }

  /**
   * Maneja la suscripción al evento onEntitiesSelected del componente {@link SelectableGridComponent}
   * @param $event
   */
  handleEntitiesSelectedEvent($event: any) {
    this.selectedEntities = $event;
    if (this.selectedEntities.length === 1) {
      this.addEditEntity = this.selectedEntities[0];
    } else {
      this.addEditEntity = undefined;
    }
  }

  /**
   * Maneja la suscripción al evento onToolbarItemClickedEvent del componente {@link ToolbarComponent}
   * @param $event
   */
  handleToolbarItemClickedEvent($event: string) {
    switch ($event) {
      case 'edit':
        this.addEditEntity = this.selectedEntities[0];
        this.popupVisible = true;
        this.onToolbarItemClicked.emit({type: $event, selectedEntities: this.selectedEntities});
        break;
      default:
        this.onToolbarItemClicked.emit({type: $event, selectedEntities: this.selectedEntities});
        break;
    }
  }
}
