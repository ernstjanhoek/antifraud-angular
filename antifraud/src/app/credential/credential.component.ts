import {Component, inject} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {UserService} from "../user.service";

@Component({
  selector: 'app-credential',
  standalone: true,
    imports: [
        AsyncPipe,
        ReactiveFormsModule
    ],
  templateUrl: './credential.component.html',
  styleUrl: './credential.component.css'
})
export class CredentialComponent {
  userService = inject(UserService);
  credentials = new FormGroup({
    username: new FormControl(""),
    password: new FormControl("")
  });

  result: Promise<boolean> | undefined

  credentialCheck() {
    this.userService.checkCredentials(
      this.credentials.value.username ?? '',
      this.credentials.value.password ?? ''
    ).then(() => {
      console.log("Credentials checked!");
    });
  }
}
