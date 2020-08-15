import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'practice';
  courses = [1, 2];
  viewMode = 'map';
  newCourses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
    { id: 4, name: 'course4' },
  ];

  addCourse() {
    this.newCourses.push({ id: this.newCourses.length + 1, name: 'newCourse' });
  }

  removeCourse(course) {
    let index = this.newCourses.indexOf(course);
    this.newCourses.splice(index, 1);
  }

  loadCourses() {
    this.newCourses = [{ id: 100, name: 'ffffff' }];
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }
}
