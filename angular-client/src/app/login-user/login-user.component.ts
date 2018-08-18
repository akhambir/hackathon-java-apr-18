import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user-service';
import {User} from '../model/user';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  private user;
  private massage;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = new User();
    this.massage = '';
  }

  public login(): void {
    this.userService.login(this.user)
      .subscribe(
        resp => {
          this.user = new User();
          this.massage = 'Successfull';
        },
        err => {
          this.massage = 'Unlogined user.';
        }
      );
  }
}
