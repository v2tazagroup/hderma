import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, switchMap, take } from 'rxjs';
import { environment } from '@tazagroup/shared/environments';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaivietService {

  private urlApi = environment.APIURL;
  private _baiviets: BehaviorSubject<any[] | null> = new BehaviorSubject<
    any[] | null
  >(null);

  get baiviets$(): Observable<any[] | null> {
    return this._baiviets.asObservable();
  }
  private _baiviet: BehaviorSubject<any | null> = new BehaviorSubject<
    any | null
  >(null);

  get baiviet$(): Observable<any | null> {
    return this._baiviet.asObservable();
  }
  constructor(private http: HttpClient) { }

  getBaiviets() {
    return this.http.get(this.urlApi+'/hderma-baiviet').pipe(
      map((data: any) => {
       
        this._baiviets.next(data);
        return data;
      })
    );
  }
  getBaivietDetail(slug: string) {
    return this.http.get(this.urlApi + `/hderma-baiviet/${slug}`).pipe(
      map((data: any) => {
        this._baiviet.next(data);
        return data;
      })
    );
  }
  postBaiviet(data: any) {
    return this.baiviets$.pipe(
      take(1),
      switchMap((baiviets: any) =>
        this.http.post(this.urlApi +'/hderma-baiviet', data).pipe(
          map((baiviet) => {
            if (baiviets?.length > 0) {
              this._baiviets.next([...baiviets, baiviet]);
            }
            return baiviet;
          })
        )
      )
    );
  }
  updateBaiviet(data: any) {
    return this.baiviets$.pipe(
      take(1),
      switchMap((baiviets: any) =>
        this.http.patch(this.urlApi + `/hderma-baiviet/${data.id}`, data).pipe(
          map((baiviet) => {
            // Find the index of the updated tag
            const index = baiviets.findIndex((item: any) => item.id === data.id);
            if(index != -1){
              baiviets[index] = data;
              this._baiviets.next(baiviets as any[]);
              
            }else{
              this._baiviets.next([baiviet]);
            
            }
           
            // Return the updated tag
            return baiviet;
          })
        )
      )
    );
  }
  deleteBaiviet(id: string) {
    return this.baiviets$.pipe(
      take(1),
      switchMap((baiviets: any) =>
        this.http.delete(this.urlApi + `/hderma-baiviet/${id}`).pipe(
          map((isDelete) => {
            const updateBaiviet = baiviets.filter((e: any) => e.id != id);

            this._baiviets.next(updateBaiviet);
            return isDelete;
          })
        )
      )
    );
  }
  private _danhmucs: BehaviorSubject<any[] | null> = new BehaviorSubject<any[] | null>(null);
  get danhmucs$(): Observable<any[] | null> {
    return this._danhmucs.asObservable();
  }
  private _danhmuc: BehaviorSubject<any | null> = new BehaviorSubject<any | null>(null);
  get danhmuc$(): Observable<any | null> {
    return this._danhmuc.asObservable();
  }
  getDanhmucs() {
    return this.http.get(this.urlApi + '/hderma-danhmuc').pipe(
      map((data: any) => {
        this._danhmucs.next(data);
        return data;
      })
    );
  }
  getDanhmucDetail(slug: string) {
    return this.http.get(this.urlApi + `/hderma-danhmuc/${slug}`).pipe(
      map((data: any) => {
        this._danhmuc.next(data);
        return data;
      })
    );
  }
  postDanhmuc(data: any) {
    return this.danhmucs$.pipe(
      take(1),
      switchMap((danhmucs: any) =>
        this.http.post(this.urlApi + '/hderma-danhmuc', data).pipe(
          map((danhmuc) => {
            if (danhmucs?.length > 0) {
              this._danhmucs.next([...danhmucs, danhmuc]);
            } else {
              this._danhmucs.next([danhmuc]);
            }
            return danhmuc;
          })
        )
      )
    );
  }
  updateDanhmuc(data: any) {
    return this.danhmucs$.pipe(
      take(1),
      switchMap((danhmucs: any) =>
        this.http.patch(this.urlApi + `/hderma-danhmuc/${data.id}`, data).pipe(
          map((danhmuc) => {
            // Find the index of the updated tag
            const index = danhmucs.findIndex((item: any) => item.id === data.id);

            // Update the tag
            if (index != -1) {
              danhmucs[index] = data;

              this._danhmucs.next(danhmucs as any[]);
            } else {
              this._danhmucs.next([danhmuc]);


            }


            // Return the updated tag
            return danhmuc;
          })
        )
      )
    );
  }
  deleteDanhmuc(id: String) {
    return this.danhmucs$.pipe(
      take(1),
      switchMap((danhmucs: any) =>
        this.http.delete(this.urlApi + `/hderma-danhmuc/${id}`).pipe(
          map((isDelete) => {
            const updateDanhmuc = danhmucs.filter((e: any) => e.id != id);

            this._danhmucs.next(updateDanhmuc);
            return isDelete;
          })
        )
      )
    );
  }

  uploadDriverHderma(file: any): Observable<any> {
    return this.http.post(this.urlApi + '/upload/filehderma', file).pipe(
      map((data: any) => {
        if (data) {
          return data;
        }
      })
    );
  }
}
