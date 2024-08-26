import {inject, Injectable} from '@angular/core';
import {UserService} from "./user.service";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {catchError, map, Observable} from "rxjs";
import {Ip} from "./ip";
import {Card} from "./card";

@Injectable({
  providedIn: 'root'
})

export class SupportService {
  userService: UserService = inject(UserService);

  constructor(private http: HttpClient) {}

  readonly tx: string = "/api/antifraud";

  addSuspiciousIp(ip_value: string) {
    this.http.post(`${this.userService.url}${this.tx}/suspicious-ip`,
      {
        ip: ip_value
      },
      {
        headers:
          {
            'Authorization' : `Basic ${this.userService.encodedCredentials}`
          }
      })
      .subscribe(
        res => console.log(res)
      )
  }

  removeSuspiciousIp(ip: string) {
    this.http.delete(`${this.userService.url}${this.tx}/${ip}`,
      {
        headers:
          {
            'Authorization' : `Basic ${this.userService.encodedCredentials}`
          }
      })
      .subscribe(
        res => console.log(res)
      )
  }

  getSuspiciousIps(): Observable<Ip> {
    return this.http.get<Ip[]>(`${this.userService.url}${this.tx}/suspicious-ip`, {
      headers: {
        'Authorization' : `Basic ${this.userService.encodedCredentials}`
      },
      observe: 'response'
    })
      .pipe(map((res:HttpResponse<Ip[]>) => {
          return res.body || [];
        }),
        catchError(error => {
          console.log(error);
          return []
        }))
  }

  addStolenCard(card_number: string) {
    this.http.post(`${this.userService.url}${this.tx}/stolencard`, {
      number: card_number
    },
      {
        headers: {
          'Authorization': `Basic ${this.userService.encodedCredentials}`
        }
      })
      .subscribe(
        res => console.log(res)
      )
  }

  removeStolenCard(number: string) {
    this.http.delete(`${this.userService.url}${this.tx}/stolencard/${number}`,
      {
        headers: {
          'Authorization': `Basic ${this.userService.encodedCredentials}`
        }
      })
      .subscribe(
        res => console.log(res)
      )
  }

  getStolenCards(): Observable<Card[]> {
    return this.http.get<Card[]>(`${this.userService.url}${this.tx}/stolencard`,
      {
        headers: {
          'Authorization': `Basic ${this.userService.encodedCredentials}`
        },
        observe: 'response'
      })
      .pipe(map((res:HttpResponse<Card[]>) => {
          return res.body || [];
        }),
        catchError(error => {
          console.log(error);
          return []
        }))
  }
}
