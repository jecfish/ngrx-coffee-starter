import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-employee-list-page',
  templateUrl: './employee-list-page.component.html',
  styleUrls: ['./employee-list-page.component.css']
})
export class EmployeeListPageComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();

  private get staticList() {
    return [
      { name: 'Jenny', age: 22 },
      { name: 'Ali', age: 21 },
      { name: 'Chris', age: 28 },
      { name: 'Celine', age: 19 },
    ];
  }

  constructor() { }

  ngOnInit() {
  }

  remove(id: string) {
  }

  reset() {
  }

  add(name, age) {
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
