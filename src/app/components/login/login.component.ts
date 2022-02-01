import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  @Output() onSignIn = new EventEmitter();

  ngOnInit() {}

  onLogin() {
    alert('here');
    this.onSignIn.emit(this.username);
  }
}
