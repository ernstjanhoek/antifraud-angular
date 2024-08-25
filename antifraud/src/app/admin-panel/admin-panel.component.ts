import {Component, inject} from '@angular/core';
import {UserService} from "../user.service";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css'
})
export class AdminPanelComponent {
  userService: UserService = inject(UserService);

}
