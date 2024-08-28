import { Injectable } from '@angular/core';
import { UserData } from "./user-data";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {catchError, map, Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  readonly url: string = "http://localhost:28852";
  currentUser: Observable<UserData> | undefined;
  encodedCredentials: string | undefined;

  constructor(private http: HttpClient) {}

  checkCredentials(username: string, password: string)  {
    const encodedCredentials = btoa(`${username}:${password}`);
    return this.http.get(this.url + "/api/auth/cred", {
      headers: {
        'Authorization': `Basic ${encodedCredentials}`
      },
      observe: 'response'
    }).pipe(
      map((response: HttpResponse<any>) => {
        return response.status === 200;
      }),
      catchError((error) => {
        console.log(error);
        return of(false);
      })
    );
  }

  login(username_value: string, password_value: string) {
    const encodedCredentials = btoa(`${username_value}:${password_value}`);
    this.currentUser = this.http.get<UserData>(this.url + "/api/auth/cred", {
        headers: {
          'Authorization': `Basic ${encodedCredentials}`
        }
      }
    ).pipe(tap(
      _ => {
        this.encodedCredentials = encodedCredentials;
      }));
  }

  registerUser(name_value: string, username_value: string, password_value: string): Observable<UserData> {
    return this.http.post<UserData>(this.url + "/api/auth/user", {
      name: name_value,
      username: username_value,
      password: password_value
    }).pipe(tap(_ => {
      console.log("registered new user");
    }));
  }
}
