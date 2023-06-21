import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environment';
import {
  BehaviorSubject,
  map,
  Observable,
  of,
  switchMap,
  take,
  throwError,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DonhangService {
  // private urlApi = 'http://localhost:3000/hderma-donhang';
  private urlApi = environment.APIURL;
  private _donhangs: BehaviorSubject<any | null> = new BehaviorSubject(null);
  private _donhang: BehaviorSubject<any | null> = new BehaviorSubject(null);
  private _donhangchitiets: BehaviorSubject<any | null> = new BehaviorSubject(null);
  private _donhangchitiet: BehaviorSubject<any | null> = new BehaviorSubject(null);

  get donhangs$(): Observable<any[]> {
    return this._donhangs.asObservable();
  }
  get donhang$(): Observable<any[]> {
    return this._donhang.asObservable();
  }
  get donhangchitiet$(): Observable<any[]> {
    return this._donhangchitiet.asObservable();
  }
  get donhangchitiets$(): Observable<any[]> {
    return this._donhangchitiets.asObservable();
  }
  constructor(private http: HttpClient) {}
  createDiem(data: any): Observable<any> {
       return this.http.post(this.urlApi+ `/hderma-customer-diem`, data).pipe(
        map((customer) => {
              console.log(customer);
            return customer;
          })
       )
  }
  postDonhang(data: any) {
    return this.http.post(this.urlApi+ `/hderma-donhang`, data).pipe(
          map((donhang) => {
            this._donhang.next(donhang);
            return donhang;
          }))
  }
  // postDonhang(data: any) {
  //   return this.donhang$.pipe(
  //     take(1),
  //     switchMap((donhangs) =>
  //       this.http.post(this.urlApi, data).pipe(
  //         map((donhang) => {
  //           this._donhang.next([donhang, ...donhangs]);
  //           return donhang;
  //         })
  //       )
  //     )
  //   );
  // }
  getDonhangs(): Observable<any> {
    return this.http.get(this.urlApi + `/hderma-donhang`).pipe(
      map((donhangs) => {
        console.log(donhangs);
        this._donhangs.next(donhangs);
        return donhangs;
      })
    );
  }
  getDonhangbyMDH(madonhang:any) {
    return this.http.get(this.urlApi + `/hderma-donhang/madonhang/${madonhang}`).pipe(
      map((donhang) => {
        return donhang;
      })
    );
  }
  getOneDonhang(id:any) {
    return this.http.get(this.urlApi + `/hderma-donhang/${id}`).pipe(
      map((donhang) => {
        this._donhang.next(donhang);
        console.log(donhang);
        return donhang;
      })
    );
  }
  getDonhangByidKH(idKH:any) {
    return this.http.get(this.urlApi + `/hderma-donhang/user/${idKH}`).pipe(
      map((donhangs) => {
        console.log(donhangs);
        this._donhangs.next(donhangs);
        return donhangs;
      })
    );
  }
  getAllDonhangChitiet(): Observable<any> {
    return this.http.get<any>(this.urlApi + `/hderma-donhangchitiet`).pipe(
      map((donhangchitiets) => {
        this._donhangchitiets.next(donhangchitiets);
        return donhangchitiets;
      }),
    );
  }
  getDonhangchitiet(id: string): Observable<any> {
    return this.http.get<any>(this.urlApi + `/hderma-donhangchitiet/${id}`).pipe(
      map((donhangchitiet) => {
        this._donhangchitiet.next(donhangchitiet);
        return donhangchitiet;
      }),
    );
  }
  postdonhangchitiet(data: any) {
    return this.http.post(this.urlApi + `/hderma-donhangchitiet`, data).pipe(
      map((donhang) => {
        this._donhangchitiet.next(donhang);
        return donhang;
      })
    );
  }
  deleteDonhang(id: string) {
    return this.donhang$.pipe(
      take(1),
      switchMap((donhangs) =>
        this.http.delete(this.urlApi + `/hderma-donhang/${id}`).pipe(
          map((isDelete) => {
            const updatedonhang = donhangs.filter((e) => e.id != id);
            this._donhang.next(updatedonhang);
            return isDelete;
          })
        )
      )
    );
  }
  updateDonhang(data: any) {
    return this.donhang$.pipe(
      take(1),
      switchMap((donhangs) =>
        this.http.patch(this.urlApi + `/hderma-donhang/${data.id}`, data).pipe(
          map((upadatedonhang) => {
            console.log(upadatedonhang);
            
            // Find the index of the updated tag
            const index = donhangs.findIndex((item) => item.id === data.id);
            // Update the tag
            donhangs[index] = data;
            // Update the tags
            this._donhang.next(donhangs);

            // Return the updated tag
            return upadatedonhang;
          })
        )
      )
    );
  }
}
