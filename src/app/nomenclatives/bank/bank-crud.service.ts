/*
 * Copyright (c) 2018. DATYS Soluciones Tecnológicas
 */

import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import * as Collections from 'typescript-collections';
import 'rxjs/Rx';

import {CrudService} from '../../_components/crud/crud.service';
import {Bank} from './model/bankdto.model';


@Injectable()
export class BankCrudService extends CrudService<Bank> {

  constructor(http: Http) {
    super(http);
    this.apiAddress = 'http://172.20.10.67/api/v2/etes-plus-client/_table/bank';
  }

  getAll() {
    return super.getAll().map(
      (response) => {
        const data = JSON.parse(response._body).resource;
        const banksList = new Collections.LinkedList<Bank>();

        for (const element of data) {
          const bank = new Bank(
            element.id,
            element.active,
            element.address,
            element.code,
            element.description,
            element.swift
          );
          banksList.add(bank)
        }

        return banksList;
      }
    );
  }
}
