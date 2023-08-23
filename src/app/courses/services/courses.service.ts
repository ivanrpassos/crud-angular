import { Injectable } from '@angular/core';
import { Course } from '../models/course';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private _http: HttpClient) {}

  list(): Course[] {
    return [
      {
        _id: 'angular',
        category: 'front-end',
        name: 'curso de angular',
      },
      {
        _id: 'spring',
        category: 'back-end',
        name: 'curso de spring boot',
      },
    ];
  }
}
