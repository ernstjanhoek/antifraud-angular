import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {FeedbackService} from "./feedback.service";
import {Injectable} from "@angular/core";

@Injectable()
export class FeedbackInterceptor implements HttpInterceptor {

  constructor(private feedbackService: FeedbackService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(req).pipe(
          tap(event => {
            if (event.type === HttpEventType.Response) {
              console.log("from result1")
              console.log(event);
              this.feedbackService.addMessage(
                event.statusText,
                event.status
              );
            }
          }),
          catchError((err, caught) => {
            console.log("from error")
            console.log(err);
            this.feedbackService.addMessage(
              err.statusText,
              err.status
            );
            return of();
          })
        );
  }
}
