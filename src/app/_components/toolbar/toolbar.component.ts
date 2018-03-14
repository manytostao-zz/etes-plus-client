import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

/**
 * Componente que genera una barra botonera o de herramientas dinámicamente
 *
 * @example
 *
 * <app-toolbar
 *             [cssClass]="toolbarCssClass"
 *             [items]="toolbarItems"
 *             [inCrud]="true"
 *             [showDefaultButtons]="showToolbarDefaultButtons"
 *             [showAcceptButton]="showToolbarAcceptButton"
 *             [showCancelButton]="showToolbarCancelButton"
 *             [showAddButton]="showToolbarAddButton"
 *             [showEditButton]="showToolbarEditButton"
 *             [showRemoveButton]="showToolbarRemoveButton"
 *             [selectedEntities]="selectedEntities"
 *             (onToolbarItemClickedEvent)="handleToolbarItemClickedEvent($event)">
 * </app-toolbar>
 */
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  /**
   * Define las clases CSS que empleará el componente
   * @type {string}
   */
  @Input() cssClass: string;

  /**
   * Define si el componente se está empleando dentro del componente {@link CrudComponent}
   * @type {boolean}
   */
  @Input() inCrud: boolean;

  /**
   * Define si serán mostrados los botones por defecto del componente
   * @type {boolean}
   */
  @Input() showDefaultButtons = false;

  /**
   * Define si será mostrado el botón *Aceptar* en el componente
   * @type {boolean}
   */
  @Input() showAcceptButton = false;

  /**
   * Define si será mostrado el botón *Cancelar* en el componente
   * @type {boolean}
   */
  @Input() showCancelButton = false;

  /**
   * Define si será mostrado el botón *Adicionar* en el componente
   * @type {boolean}
   */
  @Input() showAddButton = false;

  /**
   * Define si será mostrado el botón *Editar* en el componente
   * @type {boolean}
   */
  @Input() showEditButton = false;

  /**
   * Define si será mostrado el botón *Eliminar* en el componente
   * @type {boolean}
   */
  @Input() showRemoveButton = false;

  /**
   * Define los elementos (botones, submenús, etc.) que se mostrarán en el componente
   * @type {any[]}
   */
  @Input() items: any[];

  /**
   * Define la entidad que se encuentra seleccionada en el componente {@link CrudComponent} asociado
   * @type {any[]}
   */
  @Input() selectedEntities: any[] = [];

  /**
   * Evento emitido cuando algón elemento del componente es clickeado
   * @type {EventEmitter<string>}
   */
  @Output() onToolbarItemClickedEvent = new EventEmitter<string>();

  /**
   * Deshabilita o habilita los elementos del componente a partir de condiciones definidas en el elemento
   *
   * @example
   *
   * this.toolbarItems = [
   *             {
   *                 locateInMenu: 'always',
   *                 text: 'Print',
   *                 onClick: () => {
   *                     notify('Print option has been clicked!');
   *                 },
   *                 disableConditions: [
   *                     {
   *                         type: 'rowSelection',
   *                         values: ['multiple']
   *                     },
   *                     {
   *                         type: 'position',
   *                         values: ['CDO', 'CGO']
   *                     }
   *                 ]
   *             },
   *         ];
   *
   * @param {[{type: string; values: any[]}]} disableConditions
   * @returns {boolean}
   */
  setDisable(disableConditions: [{ type: string, values: any[] }]) {
    switch (this.inCrud) {
      case true:
        if (disableConditions === undefined) {
          return false;
        }
        if (disableConditions.length === 0) {
          return false;
        }
        let result = false;
        for (const condition of disableConditions) {
          if (condition.type === 'rowSelection') {
            for (const conditionValue of condition.values) {
              if (conditionValue === 'multiple') {
                result = !(this.selectedEntities !== undefined && this.selectedEntities !== [] && this.selectedEntities.length === 1);
              }
            }
          } else {
            if (this.selectedEntities === undefined) {
              break;
            }
            const entity = this.selectedEntities[0];
            for (const conditionValue of condition.values) {
              if (entity.hasOwnProperty(condition.type) && entity[condition.type] === conditionValue) {
                result = true;
              }
            }
          }
        }
        return result;
      default:
        return false;
    }
  }

  /**
   * Maneja la suscripción al evento onItemClick del componente dx-toolbar de DevExpress
   * @param $event
   */
  handleItemClickedEvent($event: any) {
    this.onToolbarItemClickedEvent.emit($event.itemData.type);
  }
}
