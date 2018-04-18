/*
 * Copyright (c) 2018. DATYS Soluciones Tecnológicas
 */

import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import * as Collections from 'typescript-collections';
import 'rxjs/Rx';

import {CrudService} from '../../_components/crud/crud.service';
import {Certificate} from './model/certificate.model';
import {Employee} from './model/employee.model';


@Injectable()
export class EmployeeCrudService extends CrudService<Employee> {

  constructor(http: Http) {
    super(http);
    this.apiAddress = 'http://172.20.10.67/api/v2/etes-plus-client/_table/employee';
  }

  getAll() {
    return super.getAll().map(
      (response) => {
        const data = JSON.parse(response._body).resource;
        const employeesList = new Collections.LinkedList<Employee>();

          for (const element of data) {
            const employee = new Employee(
              element.id,
              element.firstName,
              element.lastName,
              element.prefix,
              element.position,
              element.picture,
              element.birthDate,
              element.hireDate,
              element.notes,
              element.address,
              element.state,
              element.city,
              new Certificate(element.certificate_id, 'aaa', null),
              null
            );
            employeesList.add(employee)
          }

          return employeesList;
      }
    );
  }
}
