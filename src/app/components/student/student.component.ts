import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'student-profile',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  @Input() student: object;
  @Output() emitEditStudent = new EventEmitter<object>();
  @Output() emitDeleteStudent = new EventEmitter<object>();

  constructor() {};

  ngOnInit() {};

  onEditStudent(student){
    this.emitEditStudent.emit(student);
  };
  onDeleteStudent(student){
    this.emitDeleteStudent.emit(student);
  };
}
