import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  @Output() onSignIn = new EventEmitter<string>();

  ngOnInit() {}

  onLogin() {
    if (this.username === "" || this.password === ""){
      alert("Please login in");
      return;
    }
    this.onSignIn.emit(this.username);
  }
}
