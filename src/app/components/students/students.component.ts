import { Component, Output, EventEmitter } from '@angular/core';
import { StudentsDataService } from '../../services/students/students-data.service';

@Component({
  selector: 'students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent {
  // Use the StudentsDataService.getStudents function as a mock API to get students.
  students: [] = [];
  @Output() onSelectStudent = new EventEmitter<object>();
  constructor() {}

  ngOnInit() {
    StudentsDataService.getStudents().then((data) => {
      this.students = data.students;
    });
  }

  selectStudent(student) {
    this.onSelectStudent.emit(student);
  }
}
