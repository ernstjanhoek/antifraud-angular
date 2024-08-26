import {Component, inject, Input} from '@angular/core';
import {AdminService} from "../admin.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-user-cell',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './user-cell.component.html',
  styleUrl: './user-cell.component.css'
})

export class UserCellComponent {
  @Input() username!: string;
  @Input() name!: string;
  @Input() role!: string;

  adminService: AdminService = inject(AdminService);
  new_role: string = "";

  lockUser() {
    this.adminService.setUserAccess(this.username, "LOCK");
  }

  unlockUser() {
    this.adminService.setUserAccess(this.username, "UNLOCK");
  }

  changeUserRole(username: string, newRole: string) {
    this.adminService.changeUserRole(username, newRole);
  }
}
