import {Component, inject} from '@angular/core';
import {AsyncPipe, NgForOf} from "@angular/common";
import {AdminService} from "../admin.service";
import {UserData} from "../user-data";
import {Observable} from "rxjs";
import {UserCellComponent} from "../user-cell/user-cell.component";

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf,
    UserCellComponent
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
}
