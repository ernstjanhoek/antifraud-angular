import {Component, inject} from '@angular/core';
import {AsyncPipe, JsonPipe, NgIf} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {UserService} from "../user.service";
import {catchError, Observable, of} from "rxjs";
import {HttpRequest, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-credential',
  standalone: true,
  imports: [
    AsyncPipe,
    ReactiveFormsModule,
    JsonPipe,
    NgIf
  ],
  templateUrl: './credential.component.html',
  styleUrl: './credential.component.css'
})
export class CredentialComponent {
  userService = inject(UserService);
  result$: Observable<boolean> | undefined
  credentials = new FormGroup({
    username: new FormControl(""),
    password: new FormControl("")
  });

  credentialCheck()  {
    this.result$ = this.userService.checkCredentials(
      this.credentials.value.username ?? '',
      this.credentials.value.password ?? ''
    );
    console.log(this.result$);
  }

  protected readonly of = of;
}
