import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env';
import { MD5 } from 'crypto-js';

const API_PUBLIC_KEY = environment.API_PUBLIC_KEY;
const API_HASH_KEY = environment.API_PRIVATE_KEY + environment.API_PUBLIC_KEY;

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const ts = +new Date();
    const authReq = request.clone({
      params: request.params
        .set('ts', ts)
        .set('apikey', API_PUBLIC_KEY)
        .set('hash', MD5(ts + API_HASH_KEY).toString()),
    });
    return next.handle(authReq);
  }
}
