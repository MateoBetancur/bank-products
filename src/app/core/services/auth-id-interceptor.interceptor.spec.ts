import { TestBed } from '@angular/core/testing';

import { AuthIdInterceptorInterceptor } from './auth-id-interceptor.interceptor';

describe('AuthIdInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthIdInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthIdInterceptorInterceptor = TestBed.inject(AuthIdInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
