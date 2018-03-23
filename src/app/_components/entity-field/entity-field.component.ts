import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-entity-field',
  templateUrl: './entity-field.component.html',
  styleUrls: ['./entity-field.component.scss']
})
export class EntityFieldComponent implements OnInit {

  @Input() entityLocation = '../../crud-test/model/employee.model';
  @Input() entityName = 'Employee';
  dataSourceTreeEntityField: any;
  private widgetInstance: any;

  constructor() {
  }

  ngOnInit() {

    this.getTextBoxDisplayValue();

  }

  async getTextBoxDisplayValue() {
    let url = this.entityLocation;
    let widgets;
    // Soluciones provisionales a la importación dinámica. Debe estar de mayor (../../../) a menor (../).

    if (url.startsWith('../../../')) {
      url = url.substr(9)
      widgets = await import(`../../../${url}`);
    }
    if (url.startsWith('../../')) {
      url = url.substr(6)
      widgets = await import(`../../${url}`);
    }
    if (url.startsWith('../')) {
      url = url.substr(6)
      widgets = await import(`../${url}`);
    }
    if (url.startsWith('./')) {
      url = url.substr(2)
      widgets = await import(`./${url}`);
    }

    this.widgetInstance = new widgets[this.entityName]();
    this.dataSourceTreeEntityField = Object.getOwnPropertyNames(this.widgetInstance);

  }


}
