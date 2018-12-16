import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Injectable()
export class CoffeeService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any[]>('assets/list.json').pipe(
      delay(5000)
    );
  }

}
