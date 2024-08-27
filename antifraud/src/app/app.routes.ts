import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AdminPanelComponent} from "./admin-panel/admin-panel.component";
import {MerchantPanelComponent} from "./merchant-panel/merchant-panel.component";
import {SupportPanelComponent} from "./support-panel/support-panel.component";
import {RegisterUserComponent} from "./register-user/register-user.component";

export const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "admin",
    component: AdminPanelComponent
  },
  {
    path: "merchant",
    component: MerchantPanelComponent
  },
  {
    path: "support",
    component: SupportPanelComponent
  },
  {
    path: "register",
    component: RegisterUserComponent
  }
];
