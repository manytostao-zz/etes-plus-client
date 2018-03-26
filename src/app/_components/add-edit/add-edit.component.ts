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
        if (Reflect.hasMetadata('category', this.entity, field)) {
          const category = Reflect.getMetadata('category', this.entity, field);
          if (!this.fieldsLocationMetadata.containsKey(category)) {
            this.fieldsLocationMetadata.setValue(category, new Collections.Dictionary<string, string[]>());
          }
          if (Reflect.hasMetadata('group', this.entity, field)) {
            const group = Reflect.getMetadata('group', this.entity, field);
            if (!this.fieldsLocationMetadata.getValue(category).containsKey(group)) {
              this.fieldsLocationMetadata.getValue(category).setValue(group, [field]);
            } else {
              this.fieldsLocationMetadata.getValue(category).getValue(group).push(field)
            }
          } else {
            const group = '';
            if (!this.fieldsLocationMetadata.getValue(category).containsKey(group)) {
              this.fieldsLocationMetadata.getValue(category).setValue(group, [field]);
            } else {
              this.fieldsLocationMetadata.getValue(category).getValue(group).push(field)
            }
          }
        }
        if (Reflect.hasMetadata('widget', this.entity, field)) {
          const widget = Reflect.getMetadata('widget', this.entity, field);
          if (!this.fieldsWidgetsMetadata.containsKey(widget.name)) {
            this.fieldsWidgetsMetadata.setValue(widget.name, new Collections.Dictionary<string, any>());
          }
          this.fieldsWidgetsMetadata.getValue(widget.name).setValue(field, widget.options !== undefined ? widget.options : null);
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
      const widgetName = Reflect.getMetadata('widget', this.entity, field);
      if (widgetName !== undefined) {
        return field + 'Template';
      }
    }
    return '';
  }
}
