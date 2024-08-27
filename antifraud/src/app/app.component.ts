import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RegisterUserComponent} from "./register-user/register-user.component";
import {CredentialComponent} from "./credential/credential.component";
import {LoginComponent} from "./login/login.component";
import {AdminPanelComponent} from "./admin-panel/admin-panel.component";
import {MerchantPanelComponent} from "./merchant-panel/merchant-panel.component";
import {SupportPanelComponent} from "./support-panel/support-panel.component";
import {NavigationComponent} from "./navigation/navigation.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegisterUserComponent, CredentialComponent, LoginComponent, AdminPanelComponent, MerchantPanelComponent, SupportPanelComponent, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'antifraud';
}
