import {inject, Injectable} from '@angular/core';
import {UserService} from "./user.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MerchantService {
  userService: UserService = inject(UserService);

  constructor(private http: HttpClient) {}

  makeTransaction(amount_value: number, card_number: string, ip_value: string, region_value: string) {
    this.http.post(this.userService.url + "/api/antifraud/transaction",
      {
        amount: amount_value,
        ip: ip_value,
        number: card_number,
        region: region_value,
        date: new Date()
      },
      {
        headers: {
          'Authorization': `Basic ${this.userService.encodedCredentials}`
        }
      }).subscribe(
        response => console.log(response)
    )
  }

}
