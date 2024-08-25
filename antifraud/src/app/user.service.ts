import { Injectable } from '@angular/core';
import { UserData } from "./user-data";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {catchError, map, Observable, of, pipe} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  readonly url: string = "http://localhost:28852";
  private currentUser: UserData | null = null;

  constructor(private http: HttpClient) {
  }

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

  login(name_value: string, username_value: string, password_value: string) {

  }

  registerUser(name_value: string, username_value: string, password_value: string): Observable<UserData> {
    return this.http.post<UserData>(this.url + "/api/auth/user", {
      name: name_value,
      username: username_value,
      password: password_value
    }, { observe: 'response'}).pipe(
      map((response: HttpResponse<UserData>) => {
        return {
          id: response.body?.id ?? 0,
          name: response.body?.name ?? '',
          username: response.body?.username ?? '',
          role: response.body?.role ?? ''
        } as UserData
      }),
       catchError((err) => {
         console.log(err);
         return of({
           role: "err",
           id: 0,
           name: "err",
           username: "err"
         } as UserData)
       }));
  }
}
