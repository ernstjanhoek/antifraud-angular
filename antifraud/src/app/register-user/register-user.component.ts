import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {UserService} from "../user.service";

@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [
    ReactiveFormsModule
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

  registerUser() {

    console.log(this.registerUserForm.value.name);
    console.log(this.registerUserForm.value.username);
    console.log(this.registerUserForm.value.password);

    this.userService.registerUser(
      this.registerUserForm.value.name ?? '',
      this.registerUserForm.value.username ?? '',
      this.registerUserForm.value.password ?? ''
    ).then(r => console.log(r));
  }
}
