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
  selectedStudent:object;
  @Output() emitEditStudent = new EventEmitter<object>();
  @Output() onSelectStudent = new EventEmitter<object>();
  constructor() {}

  ngOnInit() {
    StudentsDataService.getStudents().then((data) => {
      console.log(data)
      this.students = data.students;
    });
  }

  selectStudent(student: object) {
    this.selectedStudent = student;
  }
  
  editStudent(student: object){
    console.log("Editing",student.name,"...")
  }

  deleteStudent(student: object){
    let confirmDelete = confirm(`Are you sure you want to delete ${student.name}'s record?`)
    if (confirmDelete){
      this.students = this.students.filter(stn => stn !== student);
      this.selectedStudent = undefined
      alert(`Successfully deleted ${student.name}`)
    }
  }
}
