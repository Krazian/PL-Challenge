import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  username: string;
  loggedIn: boolean = false;
  selectedStudent: object;

  signIn(username: string) {
    this.username = username;
    this.loggedIn = true;
  }

  logout(){
    this.username = undefined;
    this.loggedIn = false;
  }
}
