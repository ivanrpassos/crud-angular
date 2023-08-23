import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];

  displayedColumns: Array<string> = ['name', 'category'];

  constructor(private _coursesService: CoursesService) {}

  ngOnInit(): void {
    this.listAllCourses();
  }

  listAllCourses() {
    this.courses = this._coursesService.list();
  }
}
