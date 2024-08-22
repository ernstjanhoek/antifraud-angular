import {Injectable} from '@angular/core';
import {UserData} from "./user-data";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  readonly url: string = "http://localhost:28852";

  constructor() { }

  async registerUser(name_value: string, username_value: string, password_value: string): Promise<UserData> {
    const response = await fetch(this.url + "/api/auth/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name_value,
        username: username_value,
        password: password_value
      })
    })

    console.log("STATUS: " + response.status);

    const responseData = await response.json();

    return {
      authority: responseData.role,
      id: responseData.id,
      name: responseData.name,
      username: responseData.username
    };
  }

  async getUsers() {
    const response = await fetch(this.url + "/api/auth/list");

    const responseData = await response.json();

    console.log(response.status);
  }
}
