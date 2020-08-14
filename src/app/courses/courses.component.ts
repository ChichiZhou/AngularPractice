import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  title = 'Practice';
  imageURL = 'http://lorempixel.com/400/200';
  colSpan = 2;
  isActive = true;
  twoWayBinding = 'hellow there';
  text =
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et odit enim ad cupiditate nemo dicta laudantium, magni ratione laboriosam distinctio.';
  clickButton() {
    console.log('Click the button');
  }
  onKeyUp(email: HTMLInputElement) {
    console.log(email.value);
  }
  onTwoWayBinding() {
    console.log(this.twoWayBinding);
  }

  constructor() {}

  ngOnInit(): void {}
}
