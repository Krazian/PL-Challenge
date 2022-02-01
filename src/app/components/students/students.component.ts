import { Component } from '@angular/core';
import { StudentsDataService } from '../../services/students/students-data.service';

@Component({
  selector: 'students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent {
  // Use the StudentsDataService.getStudents function as a mock API to get students.
  students: any;
  getStudents = StudentsDataService.getStudents().then((data) => {
    this.students = data.students;
  });
}

//   students: any;
//   constructor() {}
//   ngOnInit() {
//     StudentsDataService.getStudents().then((data) => {
//       this.students = data.students;
//     });
//   }
// }
