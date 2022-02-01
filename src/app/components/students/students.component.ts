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
  selectedStudent: object;
  isEditing: boolean = false
  // isAdding: boolean = false;
  @Output() emitEditStudent = new EventEmitter<object>();
  @Output() onSelectStudent = new EventEmitter<object>();
  constructor() {}

  ngOnInit() {
    StudentsDataService.getStudents().then((data) => {
      this.students = data.students;
    });
  }

  // addStudent(){
  //   this.isAdding = true;
  // }

  selectStudent(student: object) {
    if(!this.isEditing){
      this.selectedStudent = student;
    }
  }

  saveStudent(student: object) {
    const studentIndex = this.students.findIndex(stdnt => stdnt.id === student.id);
    this.students[studentIndex] = student;
    this.selectedStudent = student;
    if (this.isAdding){this.isAdding = false};
  }

  toggleForm(value: boolean){
    this.isEditing = value
  }

  deleteStudent(student: object) {
    let confirmDelete = confirm(
      `Are you sure you want to delete ${student.name}'s record?`
    );
    if (confirmDelete) {
      this.students = this.students.filter((stn) => stn !== student);
      this.selectedStudent = undefined;
      alert(`Successfully deleted ${student.name}`);
    }
  }
}
