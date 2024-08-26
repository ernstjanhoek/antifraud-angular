import {Component, inject, Input} from '@angular/core';
import {AdminService} from "../admin.service";

@Component({
  selector: 'app-user-cell',
  standalone: true,
  imports: [],
  templateUrl: './user-cell.component.html',
  styleUrl: './user-cell.component.css'
})

export class UserCellComponent {
  @Input() username!: string;
  @Input() name!: string;
  @Input() role!: string;

  adminService: AdminService = inject(AdminService);

  lockUser() {

  }

  unlockUser() {

  }

  changeRole() {

  }
}
