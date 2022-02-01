import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HelloComponent } from './hello.component';
import { StudentsComponent } from './components/students/students.component';
import { StudentComponent } from './components/student/student.component';
import { StudentFormComponent } from './components/student/student-form/student-form.component';
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    LoginComponent,
    HelloComponent,
    StudentsComponent,
    StudentComponent,
    StudentFormComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
