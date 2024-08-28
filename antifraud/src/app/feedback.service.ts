import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {FeedbackMessage} from "./feedback-message";

@Injectable({
  providedIn: 'root'
})

export class FeedbackService {
  constructor() { }
  private messages: FeedbackMessage[] = [];
  private messagesSubject: BehaviorSubject<FeedbackMessage[]> = new BehaviorSubject<FeedbackMessage[]>([]);

  addMessage(message: string, statusCode: number) {
    this.messages.push({ message, statusCode });
    this.messagesSubject.next(this.getLastMessages());
  }

  getLastMessages(): FeedbackMessage[] {
    return this.messages.slice(-10); // Return the last 10 messages
  }

  getMessagesObservable(): Observable<FeedbackMessage[]> {
    return this.messagesSubject.asObservable();
  }

  resetMessages() {
    this.messages = []; // Clear the messages array
    this.messagesSubject.next([]); // Update the subject to notify subscribers
  }
}
