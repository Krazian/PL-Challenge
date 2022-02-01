import { Component, OnIni, Input } from '@angular/core';

@Component({
  selector: 'student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  @Input() editingStudent: object;
  constructor() { }

  ngOnInit() {
  }

}