import { Component, OnInit } from '@angular/core';
import {Employee} from '../../crud-test/model/employee.model';

@Component({
  selector: 'app-entity-field',
  templateUrl: './entity-field.component.html',
  styleUrls: ['./entity-field.component.scss']
})
export class EntityFieldComponent implements OnInit {

  dataSourceTreeEntityField: any = {}
  constructor() { }

  ngOnInit() {
  }

}
