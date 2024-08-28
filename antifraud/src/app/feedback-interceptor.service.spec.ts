import { TestBed } from '@angular/core/testing';

import { FeedbackInterceptorService } from './feedback-interceptor.service';

describe('FeedbackInterceptorService', () => {
  let service: FeedbackInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedbackInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
