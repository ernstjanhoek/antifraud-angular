import {Component, inject} from '@angular/core';
import {UserService} from "../user.service";
import {AsyncPipe, NgForOf} from "@angular/common";
import {AdminService} from "../admin.service";
import {UserData} from "../user-data";
import {Observable} from "rxjs";

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf
  ],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css'
})
export class AdminPanelComponent {

  adminService: AdminService = inject(AdminService);

  userList: Observable<UserData[]> | undefined;

  getUsers() {
    this.userList = this.adminService.getUsers();
  }

  protected readonly name = name;
}
