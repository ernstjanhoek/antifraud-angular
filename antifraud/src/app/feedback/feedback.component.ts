import {Component, inject} from '@angular/core';
import {AsyncPipe, NgForOf} from "@angular/common";
import {Observable} from "rxjs";
import {FeedbackService} from "../feedback.service";
import {FeedbackMessage} from "../feedback-message";

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [
    NgForOf,
    AsyncPipe
  ],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  lastMessages$: Observable<FeedbackMessage[]>;

  constructor(private feedbackService: FeedbackService) {
    this.lastMessages$ = this.feedbackService.getMessagesObservable();
  }
}
