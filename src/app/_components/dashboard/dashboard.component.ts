import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Employee, Priority, Service, Task} from './dashboard.service';

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  providers: [Service]
})
export class DashboardComponent {
  tasks: Task[];
  employees: Employee[];
  priorities: Priority[];
  statuses: string[];

  constructor(service: Service) {
    this.tasks = service.getTasks();
    this.employees = service.getEmployees();
    this.priorities = service.getPriorities();

    this.statuses = [
      'Not Started',
      'Need Assistance',
      'In Progress',
      'Deferred',
      'Completed'
    ];
  }

  getCompletionText(cellInfo) {
    return cellInfo.valueText + '%';
  }

}
