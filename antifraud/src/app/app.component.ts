import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RegisterUserComponent} from "./register-user/register-user.component";
import {CredentialComponent} from "./credential/credential.component";
import {LoginComponent} from "./login/login.component";
import {AdminPanelComponent} from "./admin-panel/admin-panel.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegisterUserComponent, CredentialComponent, LoginComponent, AdminPanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'antifraud';
}
