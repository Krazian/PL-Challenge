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
  @Input() isAdding: boolean;
  @Output() saveStudentInfo = new EventEmitter<object>();

  constructor() {}

  ngOnInit() {
    // When form is open during editing process, have the form reflect the already store data.
    if (this.isEditing) {
      const { name, therapies } = this.editingStudent;
      this.name = name;
      this.behavioral = therapies.includes('behavioral');
      this.occupational = therapies.includes('occupational');
      this.speech = therapies.includes('speech');
    }
  }

  onSaveStudent() {
    // Form validation
    if (this.name === '' || this.name === undefined) {
      alert('Student must have a name!');
      return;
    };

    // Stores therapy checkbox selections
    const therapies = [];
    if (this.behavioral) {
      therapies.push('behavioral');
    };
    if (this.occupational) {
      therapies.push('occupational');
    };
    if (this.speech) {
      therapies.push('speech');
    };

     // Spread operator allows the object to main the id
    const savedStudentData = 
    this.isAdding ?
    { name: this.name, therapies: therapies } :
    { ...this.editingStudent, name: this.name, therapies: therapies };
    this.saveStudentInfo.emit(savedStudentData);
  }
}
