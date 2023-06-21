import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap, take, switchMap, map } from 'rxjs';
import { environment } from '../environment';
@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private APIURL = environment.APIURL;
  private _email: BehaviorSubject<any | any> = new BehaviorSubject(null);
  private _emails: BehaviorSubject<any[] | any> = new BehaviorSubject(null);
  constructor(private _httpClient: HttpClient) { }
  get emails$(): Observable<any[]> {
    return this._emails.asObservable();
  }
  get email$(): Observable<any> {
    return this._email.asObservable();
  }
  getByid(id: any): Observable<any> {
    return this._httpClient.get<any>(`${this.APIURL}/email/id`).pipe(
      tap((response: any) => {
        this._email.next(response);
        console.log(response);
      })
    );
  }
  getAll(): Observable<any[]> {
    return this._httpClient.get<any[]>(`${this.APIURL}/configemail`).pipe(
      tap((response: any[]) => {
        this._emails.next(response);
      })
    );
  }
  SenderEmail(dulieu: any): Observable<any> {
    console.log(dulieu);
    return this._httpClient.post<any>(`${this.APIURL}/configemail/sendemail`, dulieu).pipe(
      tap((response: any) => {
        console.log(response);
      })
    );
  }
  createEmail(dulieu: any): Observable<any> {
    return this.emails$.pipe(
      take(1),
      switchMap(datas => this._httpClient.post<any>(`${this.APIURL}/configemail`, dulieu).pipe(
        map((res: any) => {
          this._emails.next([res[1], ...datas]);
          console.log(res);
          return res[1];
        })
      ))
    );
  }
  updateEmail(dulieu: any): Observable<any> {
    return this.emails$.pipe(
      take(1),
      switchMap((emails: any) =>
        this._httpClient.patch(`${this.APIURL}/configemail/${dulieu.id}`, dulieu).pipe(
          map((email: any) => {
            const index = emails.findIndex((item: any) => item.id === email.id);
            emails[index] = email;
            this._emails.next(emails);
            return email;
          })
        )
      ))
  }
  deleteEmail(dulieu: any) {
    return this.emails$.pipe(
      take(1),
      switchMap((emails: any) =>
        this._httpClient.delete(`${this.APIURL}/configemail/${dulieu.id}`).pipe(
          map((isDelete) => {
            const updatePhanquyens = emails.filter((e: any) => e.id != dulieu.id);
            this._emails.next(updatePhanquyens);
            return isDelete;
          })
        )
      ));
  }
}
