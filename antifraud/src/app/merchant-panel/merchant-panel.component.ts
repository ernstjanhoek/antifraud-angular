import {Component, inject} from '@angular/core';
import {MerchantService} from "../merchant.service";
import {AsyncPipe, NgForOf} from "@angular/common";
import {UserCellComponent} from "../user-cell/user-cell.component";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-merchant-panel',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf,
    UserCellComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './merchant-panel.component.html',
  styleUrl: './merchant-panel.component.css'
})
export class MerchantPanelComponent {
  merchantService: MerchantService = inject(MerchantService);
  transactionForm: FormGroup =  new FormGroup({
    card_number: new FormControl(""),
    amount: new FormControl(""),
    ip: new FormControl(""),
    region: new FormControl("")
  });


  makeTransaction() {
    this.merchantService.makeTransaction(this.transactionForm.value.amount,
      this.transactionForm.value.card_number,
      this.transactionForm.value?.ip,
      this.transactionForm.value?.region);
  }
}
