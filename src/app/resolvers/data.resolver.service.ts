import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

const departments = ['Marketing', 'Sales', 'Other'];

@Injectable({ providedIn: 'root' })
export class DataResolverService implements Resolve<any> {
  resolve(): Observable<any> {
    // Here we can call to a service in order to get information needed
    return of(departments);
  }
}
