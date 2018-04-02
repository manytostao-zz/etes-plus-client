import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import * as Collections from 'typescript-collections';

import {CrudService} from './crud.service';
import {BaseEntity} from '../../_model';
import * as ModelsClassesMap from '../../_model/model-map';
import {endTimeRange} from '@angular/core/src/profile/wtf_impl';
import {IHierarchicalEntity} from '../../_model/interfaces';

/**
 * Componente que genera elementos visuales para listar, crear, actualizar y eliminar entidades
 *
 * @example
 *
 * <app-crud
 *             [entityType]="entityType"
 *             [entitiesList]="entitiesList"
 *             [multipleSelection]="false"
 *             [toolbarItems]="toolbarItems"
 *             [showToolbarDefaultButtons]="true"
 *             toolbarCssClass="navbar navbar-expand-lg navbar-light bg-light">
 * </app-crud>
 */
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
  providers: [CrudService]
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
   * Define si el dx-grid del componente {@link SelectableGridComponent} será de múltiple selección
   * @type {boolean}
   */
  @Input() multipleSelection = true;

  /**
   * Define si serán mostrados los botones por defecto del componente {@link ToolbarComponent}
   * @type {boolean}
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
   * Define si será mostrado el botón *Esconder Detalle* en el componente {@link ToolbarComponent}
   * @type {boolean}
   */
  @Input() showToolbarHideDetailButton = true;

  /**
   * Define las clases CSS a utilizar por el componente {@link ToolbarComponent}
   * @type {string}
   */
  @Input() toolbarCssClass: string;

  /**
   * Define los elementos (botones, etc.) que contendrá el componente {@link ToolbarComponent}
   * @type {any[]}
   */
  @Input() toolbarItems: any[] = [];

  /**
   * Define el comportamiento del componente {@link CrudComponent}
   * @type {boolean}
   */
  @Input() localData = false;

  /**
   * Define si el componente {@link SelectableGridComponent} será editable
   * @type {boolean}
   */
  @Input() editableGrid: false;

  /**
   *  Contiene el listado de las entidades que se van a mostrar en el grid.
   * @type {LinkedList<BaseEntity>}
   * @private
   */
  private _entitiesList = new Collections.LinkedList<BaseEntity>();

  /**
   * Define si se mostrará el componente {@link AddEditComponent}
   * @type {any[]}
   */
  @Input() showAddEdit = true;

  /**
   *
   * @ignore
   */
  @Input() get entitiesList() {

    return this._entitiesList;
  }

  /**
   *
   * @ignore
   */
  set entitiesList(value: any) {
    this._entitiesList = value;
    this.entitiesListChange.emit(this._entitiesList);
  }

  /**
   *  Evento que se lanza cuando cambio el valor de la propiedad entitiesList
   * @type {EventEmitter<any>}
   */
  @Output() entitiesListChange = new EventEmitter<any>();


  /**
   * Evento lanzado cuando se interactúa con los elementos del {@link ToolbarComponent}
   * @type {EventEmitter<{type: string; selectedEntities: BaseEntity[]}>}
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
  /**
   * Verifica si la entidad es gerarquica y controla si se muestra el árbol o la tabla de la entidad.
   * @type {boolean}
   */
  @Input() isTree = false;

  /**
   * Constructor del componente
   * @param {CrudService} crudService
   */
  constructor(private crudService: CrudService) {
  }

  /**
   * Inicializa el componente
   */
  ngOnInit() {
    this.crudService.onEntitySelected.subscribe(
      (selectedEntities: BaseEntity[]) => {
        this.selectedEntities = selectedEntities;
        if (this.selectedEntities.length === 1) {
          this.addEditEntity = this.selectedEntities[0];
        } else {
          this.addEditEntity = undefined;
        }
      }
    );
    if (!this.localData) {
      this.crudService.entityType = this.entityType;


      // this.entitiesList = this.crudService.getEntitiesList();
    }


    if (this.entityType === '' && this.entitiesList.size() > 0) {
      this.entityType = this.entitiesList.first().constructor.name;
    }

    const entityInstance = new ModelsClassesMap[this.entityType];
    if (entityInstance.hasOwnProperty('parentId')) {
          this.isTree = true;
        }
  }

  /**
   * Maneja la suscripción al evento onToolbarItemClickedEvent del componente {@link ToolbarComponent}
   * @param $event
   */
  handleToolbarItemClickedEvent($event: string) {
    switch ($event) {
      case 'add':
        this.addEditEntity = new BaseEntity(null);
        this.popupVisible = true;
        this.onToolbarItemClicked.emit({type: $event, selectedEntities: this.selectedEntities});
        break;
      case 'edit':
        this.addEditEntity = this.selectedEntities[0];
        this.popupVisible = true;
        this.onToolbarItemClicked.emit({type: $event, selectedEntities: this.selectedEntities});
        if (this.localData) {
          console.log(this.addEditEntity);
        }
        break;
      case 'remove':
        if (this.localData) {

        }
        this.onToolbarItemClicked.emit({type: $event, selectedEntities: this.selectedEntities});
        break;
      case 'hide-detail':
        this.showAddEdit = !this.showAddEdit;
        this.onToolbarItemClicked.emit({type: $event, selectedEntities: this.selectedEntities});
        break;
      default:
        this.onToolbarItemClicked.emit({type: $event, selectedEntities: this.selectedEntities});
        break;
    }
  }
}
