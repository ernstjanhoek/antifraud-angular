import {Component, inject} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {

}
