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
              console.log("from result")
              this.feedbackService.addMessage(
                JSON.stringify(event.body),
                event.status
              );
            }
          }),
          catchError((err, caught) => {
            console.log("from error")
            this.feedbackService.addMessage(
              JSON.stringify(err.body),
              err.status
            );
            return of();
          })
        );
  }

  private extractLine(body: any): string {
    const jsonString = JSON.stringify(body);

    const lineEndIndex = jsonString.indexOf('\n');
    return lineEndIndex === -1 ? jsonString : jsonString.substring(0, lineEndIndex);
  }
}
