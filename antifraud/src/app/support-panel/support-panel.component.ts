import {Component, inject} from '@angular/core';
import {SupportService} from "../support.service";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AsyncPipe} from "@angular/common";
import {Observable} from "rxjs";
import {Ip} from "../ip";
import {Card} from "../card";

@Component({
  selector: 'app-support-panel',
  standalone: true,
  imports: [
    AsyncPipe,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './support-panel.component.html',
  styleUrl: './support-panel.component.css'
})
export class SupportPanelComponent {
  supportService: SupportService = inject(SupportService);

  suspiciousIpForm: FormGroup = new FormGroup({
    ip: new FormControl(""),
  });

  stolenCardForm: FormGroup = new FormGroup({
    number: new FormControl(""),
  });

  suspiciousIpList: Observable<Ip[]> | undefined;

  getSuspiciousIps() {
    this.suspiciousIpList = this.supportService.getSuspiciousIps();
  }

  stolenCardList: Observable<Card[]> | undefined;

  getStolenCards() {
    this.stolenCardList = this.supportService.getStolenCards();
  }

  addSuspiciousIp() {
    this.supportService.addSuspiciousIp(this.suspiciousIpForm.value?.ip);
  }

  addStolenCard() {
    this.supportService.addStolenCard(this.stolenCardForm.value?.number);
  }

  getTransactions() {
    this.supportService.getTransactions();
  }
}
