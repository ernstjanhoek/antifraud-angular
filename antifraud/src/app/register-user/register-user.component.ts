import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {UserService} from "../user.service";
import {AsyncPipe, NgIf} from "@angular/common";
import {UserData} from "../user-data";

@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    AsyncPipe
  ],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})

export class RegisterUserComponent {
  registerUserForm = new FormGroup({
    name:  new FormControl(""),
    username: new FormControl(""),
    password: new FormControl("")
  });

  userService = inject(UserService);
  resolvedReg: boolean = false;
  userData: Promise<UserData> | undefined;

  registerUser() {

    console.log(this.registerUserForm.value.name);
    console.log(this.registerUserForm.value.username);
    console.log(this.registerUserForm.value.password);

    this.userData = this.userService.registerUser(
      this.registerUserForm.value.name ?? '',
      this.registerUserForm.value.username ?? '',
      this.registerUserForm.value.password ?? ''
    );
  }
}
