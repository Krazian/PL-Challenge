import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'student-profile',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  editing: boolean;
  @Input() adding: boolean;
  @Input() student: object;
  @Output() emitSaveStudent = new EventEmitter<object>();
  @Output() emitToggleForm = new EventEmitter<boolean>();
  @Output() emitDeleteStudent = new EventEmitter<object>();

  constructor() {}

  ngOnInit() {
    console.log(this.adding)
  }

  saveStudent(student: object){
    if(this.editing){
      this.editing = false;
      this.emitSaveStudent.emit(student)
      this.emitToggleForm.emit(this.editing)
    } 
    // else if (this.adding){
    //   this.adding = false;
    //   this.emitSaveStudent.emit(student)
    //   this.emitToggleForm.emit(this.editing)
    // }
  }

  onEditStudent() {
    this.editing = true;
    this.emitToggleForm.emit(this.editing)
  }

  onToggleForm() {
    this.editing = false;
    this.emitToggleForm.emit(this.editing)
  }

  onDeleteStudent(student: object) {
    this.emitDeleteStudent.emit(student);
  }
}
