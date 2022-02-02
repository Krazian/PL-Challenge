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
  isAdding: boolean = false;
  @Input() searchTerms: string = '';
  @Input() sortTherapy: string = '';
  @Output() emitEditStudent = new EventEmitter<object>();
  @Output() onSelectStudent = new EventEmitter<object>();
  constructor() {}

  ngOnInit() {
    StudentsDataService.getStudents().then((data) => {
      this.students = [...data.students];
      this.studentsCopy = [...data.students];
    });
  }

  /* ----- CRUD Operations ----- */
  addStudent(){
    this.isAdding = !this.isAdding;
  }

  selectStudent(student: object) {
    if (!this.isEditing && !this.isAdding) {
      this.selectedStudent = student;
    };
  }

  // Save only working for edits
  saveStudent(student: object) {
    if (this.isAdding){
      student.id = this.studentsCopy.length.toString();
      this.students.unshift(student);
      this.studentsCopy.unshift(student);
    } else {
      const studentIndex = this.students.findIndex(
        (stdnt) => stdnt.id === student.id
      );
      this.students[studentIndex] = student;
      this.studentsCopy = this.students;
      this.selectedStudent = student;
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
      this.studentsCopy = this.students;
    }
  }

  toggleForm(value: boolean) {
    this.isEditing = value;
  }

  /* ----- Methods for SEARCHING AND SORTING ----- */
  onSearch(): void {
    let search = this.searchTerms
      .toLowerCase()
      .replace(/[^a-zA-Z ]/g, '')
      .split(' ');
    this.students = this.studentsCopy.filter((student) => {
      let concatFields = `${student.name.toLowerCase()} ${student.therapies.join(' ')}`;
      let match = false;
      search.forEach((term) => {
        if (concatFields.includes(term)) {
          match = true;
        };
      });
      if (match) {
        return student;
      };
    });
  }

  onClearSearch(): void {
    this.searchTerms = '';
    this.sortAscending = true;
    this.sortTherapy = '';
    this.students = this.studentsCopy;
  }

  onSort(): void {
    // Sort the (filtered) list of students
    this.students = this.students.sort((s1, s2) => {
      const s1Name = s1.name.toLowerCase();
      const s2Name = s2.name.toLowerCase();
      if (s1Name < s2Name) {
        return this.sortAscending ? -1 : 1;
      } else if (s1Name > s2Name) {
        return this.sortAscending ? 1 : -1;
      } else {
        return 0;
      }
    });
    this.sortAscending = !this.sortAscending;
  }

  sortByTherapy(): void {
    if (this.searchTerms === ""){
      this.students = this.studentsCopy.filter(
        student => student.therapies.indexOf(this.sortTherapy) !== -1
      );
    } else {
      // Duplicate code from the onSearch() method. How to break this out and make dry?
      let search = this.searchTerms
        .toLowerCase()
        .replace(/[^a-zA-Z ]/g, '')
        .split(' ');
      this.students = this.studentsCopy.filter(
        student => student.therapies.indexOf(this.sortTherapy) !== -1
      ).filter((student) => {
        let concatFields = `${student.name.toLowerCase()} ${student.therapies.join(' ')}`;
        let match = false;
        search.forEach((term) => {
          if (concatFields.includes(term)) {
            match = true;
          };
        });
        if (match) {
          return student;
        };
      });
    };
  }
}
