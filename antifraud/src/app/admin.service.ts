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

  setUserAccess(username_value: string, operation_value: string) {
    this.http.put(this.userService.url + "/api/auth/access", {
      username: username_value,
      operation: operation_value
    },
      {
        headers: {
          'Authorization' : `Basic ${this.userService.encodedCredentials}`
        }
      }).subscribe(
      response => console.log(response)
    )
  }

  changeUserRole(username_value: string, new_role: string) {
    this.http.put(this.userService.url + "/api/auth/role", {
        username: username_value,
        role: new_role
      },
      {
        headers: {
          'Authorization': `Basic ${this.userService.encodedCredentials}`
        }
      }).subscribe(
      response => console.log(response)
    )
  }

  deleteUser(username_value: string) {
    this.http.delete(this.userService.url + "/api/auth/user/" + username_value,
      {
        headers: {
          'Authorization': `Basic ${this.userService.encodedCredentials}`
        }
      }).subscribe(
      response => console.log(response)
    )
  }
}
