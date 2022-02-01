import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StudentsComponent } from './components/students/students.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    StudentsComponent,
    LoginComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
