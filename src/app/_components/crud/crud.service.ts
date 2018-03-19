import {EventEmitter} from '@angular/core';
import * as Collections from 'typescript-collections';

import {BaseEntity} from '../../_model';
import {Employee} from '../../crud-test/model/employee.model';
import {Certificate} from '../../crud-test/model/certificate.model';

export class CrudService {

  private employeesList = new Collections.LinkedList<BaseEntity>();

  private certificatesList = new Collections.LinkedList<BaseEntity>();

  onEntitySelected = new EventEmitter<BaseEntity[]>();

  constructor() {

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
        null
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
        null
      )
    );

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

    this.certificatesList.add(
      new Certificate(
        '3',
        'Nuclear Phycisist',
        new Date()
      )
    );
  }

  getEntitiesList(entityType: string) {
    switch (entityType) {
      case 'Employee':
        return this.employeesList;
      case 'Certificate':
        return this.certificatesList;
    }

  }

}
