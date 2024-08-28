import { Injectable } from '@angular/core';
import {HttpHandlerFn, HttpRequest} from "@angular/common/http";

interface FeedbackMessage {
  message: string;
  statusCode: number;
}

@Injectable({
  providedIn: 'root'
})

export class FeedbackService {
  constructor() { }

  private messages: FeedbackMessage[] = [];

  addMessage(message: string, statusCode: number) {
    this.messages.push({ message, statusCode });
  }

  getMessages(): FeedbackMessage[] {
    return this.messages;
  }

  // getTenLastMessages() {
  //   let min: number = 0
  //   if (this.messages.length - 10 > 0) {
  //     min = this.messages.length - 10
  //   }
  //   return this.messages.slice(min, this.messages.length - 1);
  // }

  clearMessages() {
    this.messages = [];
  }
}
