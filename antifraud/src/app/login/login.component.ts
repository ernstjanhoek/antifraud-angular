import {Component, inject} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {UserService} from "../user.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    AsyncPipe,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userService: UserService = inject(UserService);
  login: FormGroup = new FormGroup({
    username: new FormControl(""),
    password: new FormControl("")
  });

  loginUser() {
    this.userService.login(this.login.value.username, this.login.value.password);
  }
}
