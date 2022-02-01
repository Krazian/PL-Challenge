import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'student-profile',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  editing: boolean = false;
  @Input() student: object;
  @Output() emitEditStudent = new EventEmitter<object>();
  @Output() emitDeleteStudent = new EventEmitter<object>();

  constructor() {}

  ngOnInit() {}

  onEditStudent(student) {
    this.editing = true;
    // this.emitEditStudent.emit(student);
  }

  onSaveStudent(student) {}

  onDeleteStudent(student) {
    this.emitDeleteStudent.emit(student);
  }
}
