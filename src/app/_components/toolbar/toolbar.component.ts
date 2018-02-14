import {Component, Input, OnInit} from '@angular/core';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() class: string;
  @Input() items: any[];

  constructor() {
  }

  ngOnInit() {
  }

}
