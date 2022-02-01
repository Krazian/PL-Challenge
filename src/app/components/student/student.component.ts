import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'student-profile',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  @Input() student: object;
  constructor() {}

  ngOnInit() {
    console.log(this.student);
  }
}
