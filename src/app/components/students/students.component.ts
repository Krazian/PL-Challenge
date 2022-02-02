import { Component, Input, Output, EventEmitter } from '@angular/core';
import { StudentsDataService } from '../../services/students/students-data.service';

@Component({
  selector: 'students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent {
  // Use the StudentsDataService.getStudents function as a mock API to get students.
  students: [] = [];
  studentsCopy: [] = [];
  sortAscending: boolean = true;
  selectedStudent: object;
  isEditing: boolean = false;
  // isAdding: boolean = false;
  @Input() searchTerms: string = '';
  @Output() emitEditStudent = new EventEmitter<object>();
  @Output() onSelectStudent = new EventEmitter<object>();
  constructor() {}

  ngOnInit() {
    StudentsDataService.getStudents().then((data) => {
      this.students = data.students;
      this.studentsCopy = data.students;
    });
  }

  /* CRUD Operations */
  // addStudent(){
  //   this.isAdding = true;
  // }

  selectStudent(student: object) {
    if (!this.isEditing) {
      this.selectedStudent = student;
    }
  }

  saveStudent(student: object) {
    const studentIndex = this.students.findIndex(
      (stdnt) => stdnt.id === student.id
    );
    this.students[studentIndex] = student;
    this.selectedStudent = student;
    if (this.isAdding) {
      this.isAdding = false;
    }
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

  toggleForm(value: boolean) {
    this.isEditing = value;
  }

  onSearch(): void {
    // Simple O^n search for multiple keyword matches
    let search = this.searchTerms.split(' ');
    this.students = this.studentsCopy.filter((student) => {
      let concatFields = '';
      let match = false;
      concatFields += student.name.toLowerCase();
      concatFields += student.therapies.join(' ');
      for (let term of search) {
        if (concatFields.includes(term.toLowerCase())) {
          match = true;
        }
      }
      if (match) {
        return student;
      }
    });
  }

  onClearSearch(): void {
    this.searchTerms = '';
    this.students = this.studentsCopy;
  }

  onSort(): any {
    // Sort the (filtered) list of students
    this.students = this.students.sort((s1, s2) => {
      if(s1.name.toLowerCase() < s2.name.toLowerCase()){
        return this.sortAscending ? -1 : 1;
      } else if(s1.name.toLowerCase() > s2.name.toLowerCase()){
        return this.sortAscending ? 1 : -1;
      } else {
        return 0
      }
    });
    this.sortAscending = !this.sortAscending
  }
}
