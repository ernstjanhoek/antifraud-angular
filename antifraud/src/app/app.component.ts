import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterUserComponent } from "./register-user/register-user.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegisterUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'antifraud';
}
