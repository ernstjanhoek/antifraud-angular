import {Component, inject} from '@angular/core';
import {RouterLink} from "@angular/router";
import {UserService} from "../user.service";
import {Observable} from "rxjs";
import {UserData} from "../user-data";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    RouterLink,
    AsyncPipe
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  userService = inject(UserService);

  getUser(): Observable<UserData> | undefined {
    return this.userService.currentUser;
  }
}
