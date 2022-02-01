import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'student-profile',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  editing: boolean = false;
  @Input() student: object;
  @Output() emitSaveStudent = new EventEmitter<object>();
  @Output() emitDeleteStudent = new EventEmitter<object>();

  constructor() {}

  ngOnInit() {}

  saveStudent(student: object){
    this.emitSaveStudent.emit(student)
  }

  onEditStudent() {
    this.editing = true;
  }

  onDeleteStudent(student: object) {
    this.emitDeleteStudent.emit(student);
  }
}
