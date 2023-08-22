import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: Array<Course> = [
    {
      _id: 'angular',
      category: 'front-end',
      name: 'curso de angular',
    },
  ];

  displayedColumns: Array<string> = ['name', 'category'];

  constructor() {}

  ngOnInit(): void {}
}
