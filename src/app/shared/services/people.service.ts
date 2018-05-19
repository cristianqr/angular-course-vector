import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Person} from '../../models/person.model';
@Injectable()
export class PeopleService {
  constructor( private http: HttpClient) {
  }

  listPerson (): Observable<Person[]> {
    return this.http.get<Person[]>('/api/people');
  }
  savePerson(person): Observable<Person> {
    return this.http.post<Person>('/api/people', person);
  }
}
