import {Component, Input, OnInit} from '@angular/core';
import * as Collections from 'typescript-collections';

import {BaseEntity} from '../../_model';

/**
 * Componente que genera elementos visuales para crear y/o editar objetos de la entidad que controla
 *
 * @example
 *
 * <app-add-edit
 *             [entity]="addEditEntity"
 *             [editable]="false">
 * </app-add-edit>
 */
@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {

  /**
   * Define si los elementos del componente se muestran habilitados
   * @type {boolean}
   */
  @Input() editable = true;

  /**
   * Contiene la entidad que controla el componente
   * @type {BaseEntity}
   */
  @Input() entity: BaseEntity;

  /**
   * Contiene metadatos de las propiedades de la entidad que controla relacionados con su ubicación
   * @type {Dictionary<string, Dictionary<string, string[]>>}
   */
  fieldsLocationMetadata = new Collections.Dictionary<string, Collections.Dictionary<string, string[]>>();

  /**
   * Contiene metadatos de las propiedades de la entidad que controla relacionados con su control visual
   * @type {Dictionary<string, Dictionary<string, string[]>>}
   */
  fieldsWidgetsMetadata = new Collections.Dictionary<string, Collections.Dictionary<string, any>>();

  /**
   * Inicializa el componente
   */
  ngOnInit() {
    this.extractEntityMetadata();
  }

  /**
   * Extrae los metadatos de la entidad que controla y los carga en [fieldsLocationMetadata]{@link AddEditComponent#fieldsLocationMetadata}
   * y [fieldsWidgetsMetadata]{@link AddEditComponent#fieldsWidgetsMetadata}
   */
  extractEntityMetadata() {
    for (const field in this.entity) {
      if (this.entity.hasOwnProperty(field)) {
        let widgetMetadata: any;
        if (Reflect.hasMetadata('widget', this.entity, field)) {
          widgetMetadata = Reflect.getMetadata('widget', this.entity, field);
          if (!this.fieldsLocationMetadata.containsKey(widgetMetadata.location.category)) {
            this.fieldsLocationMetadata.setValue(widgetMetadata.location.category, new Collections.Dictionary<string, string[]>());
          }
          if (!this.fieldsLocationMetadata
              .getValue(widgetMetadata.location.category)
              .containsKey(widgetMetadata.location.group !== undefined ? widgetMetadata.location.group : '')) {
            this.fieldsLocationMetadata
              .getValue(widgetMetadata.location.category)
              .setValue(widgetMetadata.location.group !== undefined ? widgetMetadata.location.group : '', [field]);
          } else {
            this.fieldsLocationMetadata
              .getValue(widgetMetadata.location.category)
              .getValue(widgetMetadata.location.group !== undefined ? widgetMetadata.location.group : '')
              .push(field);
          }
          if (Reflect.hasMetadata('widget', this.entity, field)) {
            widgetMetadata = Reflect.getMetadata('widget', this.entity, field);
            if (widgetMetadata.name !== undefined) {
              if (!this.fieldsWidgetsMetadata.containsKey(widgetMetadata.name)) {
                this.fieldsWidgetsMetadata.setValue(widgetMetadata.name, new Collections.Dictionary<string, any>());
              }
              this.fieldsWidgetsMetadata
                .getValue(widgetMetadata.name)
                .setValue(field, widgetMetadata.options !== undefined ? widgetMetadata.options : null);
            }
          }
        }
      }
    }
  }

  /**
   * Retorna el nombre que tendrá la plantilla que se empleará para gestionar el valor de campo
   * @param {string} field
   * @returns {string}
   */
  getTemplateNameByField(field: string) {
    if (Reflect.hasMetadata('widget', this.entity, field)) {
      const widgetMetadata = Reflect.getMetadata('widget', this.entity, field);
      if (widgetMetadata.name !== undefined) {
        return field + 'Template';
      }
    }
    return '';
  }
}
