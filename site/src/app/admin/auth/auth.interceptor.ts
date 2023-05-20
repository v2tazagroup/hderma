import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { AuthUtils } from './auth.utils';

@Injectable()
export class AuthInterceptor implements HttpInterceptor
{
    constructor(private _authService: AuthService)
    {
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
    {
        let newReq = req.clone();
        if ( this._authService.accessToken && !AuthUtils.isTokenExpired(this._authService.accessToken) )
        // if ( this._authService.accessToken)
        {
            newReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + this._authService.accessToken)
            });
        }
        return next.handle(newReq).pipe(
            catchError((error) => {
                if ( error instanceof HttpErrorResponse && error.status === 401 )
                {
                    this._authService.Dangxuat();
                    location.reload();
                }
                return throwError(error);
            })
        );
    }
}
