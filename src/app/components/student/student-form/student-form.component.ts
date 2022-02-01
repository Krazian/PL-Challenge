import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
})
export class StudentFormComponent implements OnInit {
  @Input() name: string
  @Input() behavioral: boolean
  @Input() occupational: boolean
  @Input() speech: boolean
  @Input() editingStudent: object;
  @Input() isEditing: boolean;
  @Output() saveStudentInfo = new EventEmitter<object>();

  constructor() {}

  ngOnInit() {
    this.name = this.editingStudent.name 
    this.behavioral = this.editingStudent.therapies.includes("behavioral")
    this.occupational = this.editingStudent.therapies.includes("occupational")
    this.speech = this.editingStudent.therapies.includes("speech")
  }

  onSaveStudent(editingStudent: object) {
    console.log(this.name)
    console.log(this.behavioral)
    console.log(this.occupational)
    console.log(this.speech)
    console.log('editingStudent', editingStudent);
    this.saveStudentInfo.emit(editingStudent)
  }
}
