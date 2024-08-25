import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {UserService} from "./user.service";
import {catchError, map, Observable} from "rxjs";
import {UserData} from "./user-data";

@Injectable({
  providedIn: 'root'
})

export class AdminService {
  userService: UserService = inject(UserService);

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserData[]> {
    return this.http.get<UserData[]>(this.userService.url + "/api/auth/list", {
      headers: {
        'Authorization' : `Basic ${this.userService.encodedCredentials}`
      },
      observe: 'response'
    })
      .pipe(map((res:HttpResponse<UserData[]>) => {
        return res.body || [];
      }),
      catchError(error => {
        console.log(error);
        return []
      }))
  }
}
