import {Component, Input, OnInit, ViewChild} from '@angular/core';
import * as Collections from 'typescript-collections';

import {BaseEntity} from '../../_model';

/**
 * Componente que genera elementos visuales para crear y/o editar objetos de la enitidad que controla
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
   * Contiene los metadatos definidos en las propiedades de la entidad que controla
   * @type {Dictionary<string, Dictionary<string, string[]>>}
   */
  entityMetadata = new Collections.Dictionary<string, Collections.Dictionary<string, string[]>>();

  /**
   * Inicializa el componente
   */
  ngOnInit() {
    this.extractEntityMetadata();
  }

  /**
   * Extrae los metadatos de la entidad que controla y los carga en {@link AddEditComponent#entityMetadata}
   */
  extractEntityMetadata() {
    for (const field in this.entity) {
      if (this.entity.hasOwnProperty(field)) {
        if (Reflect.hasMetadata('category', this.entity, field)) {
          const category = Reflect.getMetadata('category', this.entity, field);
          if (!this.entityMetadata.containsKey(category)) {
            this.entityMetadata.setValue(category, new Collections.Dictionary<string, string[]>());
          }
          if (Reflect.hasMetadata('group', this.entity, field)) {
            const group = Reflect.getMetadata('group', this.entity, field);
            if (!this.entityMetadata.getValue(category).containsKey(group)) {
              this.entityMetadata.getValue(category).setValue(group, [field]);
            } else {
              this.entityMetadata.getValue(category).getValue(group).push(field)
            }
          } else {
            const group = '';
            if (!this.entityMetadata.getValue(category).containsKey(group)) {
              this.entityMetadata.getValue(category).setValue(group, [field]);
            } else {
              this.entityMetadata.getValue(category).getValue(group).push(field)
            }
          }
        }
      }
    }
  }
}
