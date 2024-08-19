import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private readonly url: string = "http://localhost:28852";

  constructor() {

  }
}
