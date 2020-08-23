import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormArray,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css'],
})
export class NewCourseFormComponent {
  form;
  // form = new FormGroup({
  //   topics: new FormArray([]),   // 使用 FormArray 的原因，目的是建立一个 array ？？？？
  //   name: new FormControl(),
  //   contact: new FormGroup({
  //     email: new FormControl(),
  //     phone: new FormControl(),
  //   }),
  // });

  // 使用 FormBuilder
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      topics: fb.array([]),
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: [],
      }),
    });
  }

  addTopic(topic: HTMLInputElement) {
    // 注意这里要传入一个 FormControl
    this.topics.push(new FormControl(topic.value));
  }

  removeTopic(topic: FormControl) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  // 这里强行将结果转成 FormArray，所以上面才能 push
  get topics() {
    return this.form.get('topics') as FormArray;
  }
}
