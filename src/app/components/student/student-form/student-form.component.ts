import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
})
export class StudentFormComponent implements OnInit {
  @Input() name: string;
  @Input() behavioral: boolean;
  @Input() occupational: boolean;
  @Input() speech: boolean;
  @Input() editingStudent: object;
  @Input() isEditing: boolean;
  @Output() saveStudentInfo = new EventEmitter<object>();

  constructor() {}

  ngOnInit() {
    if (this.isEditing) {
      this.name = this.editingStudent.name;
      this.behavioral = this.editingStudent.therapies.includes('behavioral');
      this.occupational =
        this.editingStudent.therapies.includes('occupational');
      this.speech = this.editingStudent.therapies.includes('speech');
    }
  }

  onSaveStudent() {
    if (this.name === '' || this.name === undefined) {
      alert('Student must have a name!');
      return;
    }
    const therapies = [];
    if (this.behavioral) {
      therapies.push('behavioral');
    }
    if (this.occupational) {
      therapies.push('occupational');
    }
    if (this.speech) {
      therapies.push('speech');
    }
    const savedStudentData = {
      ...this.editingStudent,
      name: this.name,
      therapies: therapies,
    };
    console.log(savedStudentData)
    // this.saveStudentInfo.emit(savedStudentData);
  }
}
