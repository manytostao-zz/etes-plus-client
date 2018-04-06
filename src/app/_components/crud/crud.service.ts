import {EventEmitter} from '@angular/core';
import * as Collections from 'typescript-collections';

import {BaseEntity} from '../../_model';
import {Employee} from '../../crud-test/model/employee.model';
import {Certificate} from '../../crud-test/model/certificate.model';

export class CrudService {

  private employeesList = new Collections.LinkedList<BaseEntity>();

  private certificatesList = new Collections.LinkedList<BaseEntity>();

  private _entityType: string;

  onEntitySelected = new EventEmitter<BaseEntity[]>();

  constructor() {

    this.certificatesList.add(
      new Certificate(
        '1',
        'Software Engineer',
        new Date()
      )
    );

    this.certificatesList.add(
      new Certificate(
        '2',
        'Librarian',
        new Date()
      )
    );

    const localCertificates = new Collections.LinkedList<Certificate>();

    localCertificates.add(
      new Certificate(
        '1',
        'Software Engineer',
        new Date()
      )
    );

    localCertificates.add(
      new Certificate(
        '2',
        'Librarian',
        new Date()
      )
    );

    this.employeesList.add(
      new Employee(
        '1',
        'Osmany',
        'Torres Leyva',
        'Mr.',
        'CEO',
        'adasdasdwqer',
        new Date(),
        new Date(),
        'Notas',
        '31A #2609',
        'Playa',
        'La Habana',
        <Certificate>this.certificatesList.first(),
        localCertificates
      )
    );

    this.employeesList.add(
      new Employee(
        '2',
        'Ana Liz',
        'García Meriño',
        'Ms.',
        'CGO',
        'adasdasdwqer',
        new Date(),
        new Date(),
        'Notas',
        '31A #2609',
        'Playa',
        'La Habana',
        null,
        null
      )
    );

    this.employeesList.add(
      new Employee(
        '3',
        'Oscar',
        'Torres Leyva',
        'Mr.',
        'CDO',
        'adasdasdwqer',
        new Date(),
        new Date(),
        'Notas',
        '31A #2609',
        'Playa',
        'La Habana',
        null,
        null
      )
    );

    this.certificatesList.add(
      new Certificate(
        '3',
        'Nuclear Physicist',
        new Date()
      )
    );
  }

  get entityType(): string {
    return this._entityType;
  }

  set entityType(value: string) {
    this._entityType = value;
  }

  getEntitiesList() {
    switch (this.entityType) {
      case 'Employee':
        return this.employeesList;
      case 'Certificate':
        return this.certificatesList;
    }
  }

  getEntity(id: string) {
    let entity: BaseEntity = new BaseEntity(null);
    switch (this.entityType) {
      case 'Employee':
        this.employeesList.forEach((element) => {
          if (element.id === id) {
            entity = element;
          }
        });
        break;
      case 'Certificate':
        this.certificatesList.forEach((element) => {
          if (element.id === id) {
            entity = element;
          }
        });
        break;
    }
    return entity;
  }

}
