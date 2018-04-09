import {EventEmitter} from '@angular/core';
import * as Collections from 'typescript-collections';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';

export abstract class CrudService<T> {

  onEntitySelected = new EventEmitter<T[]>();

  protected apiAddress = '';

  constructor(protected http: Http) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.apiAddress + '?api_key=200d3c95129255a48e30cd2bd6b209d0d23507c918fb66e9cf092b9973c3c6cb');
  }
}
