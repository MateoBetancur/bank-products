import { TestBed } from '@angular/core/testing';

import { AuthIdInterceptorInterceptor } from './auth-id-interceptor.interceptor';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('AuthIdInterceptorInterceptor', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthIdInterceptorInterceptor, multi: true },
      ],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should set authorId header in the request', () => {
    const testData = { message: 'test data' };

    httpClient.get('/api/data').subscribe((data) => {
      expect(data).toEqual(testData);
    });

    const req = httpTestingController.expectOne('/api/data');
    expect(req.request.headers.has('authorId')).toBe(true);
    expect(req.request.headers.get('authorId')).toBe('500');

    req.flush(testData);

    httpTestingController.verify();
  });
});
