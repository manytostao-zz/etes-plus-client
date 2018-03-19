import {Component, Input} from '@angular/core';

import {BaseEntity} from '../../_model';
import * as Collections from 'typescript-collections';

/**
 * Componente que genera dinámicamente un control visual de formulario para la edición del valor de la propiedad de una entidad
 *
 * @example
 *
 * <app-custom-field-template
 *             [widget]="widget"
 *             [fields]="fields"
 *             [(entity)]="entity"
 *             [disabled]="!editable">
 * </app-custom-field-template>
 */
@Component({
  selector: 'app-custom-field-template',
  templateUrl: './custom-field-template.component.html',
  styleUrls: ['./custom-field-template.component.scss']
})
export class CustomFieldTemplateComponent {

  /**
   * Define si el control visual se mostrará deshabilitado
   * @type {boolean}
   */
  @Input() disabled: boolean;

  /**
   * Define el control visual que se generará
   * @type {string}
   */
  @Input() widget: string;

  /**
   * Define los campos a los que se le generará el control definido en el [widget]{@link CustomFieldTemplateComponent#widget}
   * @type {string[]}
   */
  @Input() fields = new Collections.Dictionary<string, any>();

  /**
   * Define la entidad a la cual se le modificarán los [fields]{@link CustomFieldTemplateComponent#fields}
   */
  @Input() entity: BaseEntity;

  constructor(private crudService) {
  }

}
