import { Injectable } from '@angular/core';
import { LocalStorageService } from './localstorage.service';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GiohangService {
  private _cartItems: BehaviorSubject<any | null> = new BehaviorSubject(null);
  private _total: BehaviorSubject<any | null> = new BehaviorSubject(null);
  private _soluong: BehaviorSubject<any | null> = new BehaviorSubject(null);
  private cartItems: any[] = [];
  constructor(private localStorageService: LocalStorageService) {}
  get cartItems$(): Observable<any[]> {
    return this._cartItems.asObservable();
  }
  get total$(): Observable<any> {
    return this._total.asObservable();
  }
  get soluong$(): Observable<any> {
    return this._soluong.asObservable();
  }
  addToCart(item: any): void {
    this.cartItems = this.localStorageService.getItem('giohang')?this.localStorageService.getItem('giohang'):[]   
    const existingItem = this.cartItems.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.soluong += item.soluong;
    } else {
      this.cartItems.push(item);
    }
    this._cartItems.next(this.cartItems);
    this.localStorageService.setItem('giohang',this.cartItems)
    const total = this.cartItems.reduce((total, item) => total + (item.Gia * item.soluong), 0);
    this._total.next(total);
    const soluong = this.cartItems.reduce((soluong, item) => soluong + item.soluong, 0);
    this._soluong.next(soluong);
  }
removeFromCart(itemId: number): void {
    this.cartItems = this.localStorageService.getItem('giohang')?this.localStorageService.getItem('giohang'):[]
    const index = this.cartItems.findIndex(i => i.id === itemId);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
    this._cartItems.next(this.cartItems);
    this.localStorageService.setItem('giohang',this.cartItems)
    const total = this.cartItems.reduce((total, item) => total + (item.Gia * item.soluong), 0);
    this._total.next(total);
    const soluong = this.cartItems.reduce((soluong, item) => soluong + item.soluong, 0);
    this._soluong.next(soluong);
  }
EmptyCart(): void {
    this.cartItems = []
    this._cartItems.next(this.cartItems);
    this.localStorageService.setItem('giohang',this.cartItems)
    this._total.next(0);
    this._soluong.next(0);
  }
  updateQuantity(itemId: number, Upadatesoluong: number): void {
    this.cartItems = this.localStorageService.getItem('giohang')?this.localStorageService.getItem('giohang'):[]
    const item = this.cartItems.find(i => i.id === itemId);
    if (item) {
      item.soluong = Upadatesoluong;
    }
    const index = this.cartItems.findIndex(v => v.id === itemId);
    this.cartItems[index] = { ...this.cartItems[index], ...item};
    this._cartItems.next(this.cartItems);
    this.localStorageService.setItem('giohang',this.cartItems)
    const total = this.cartItems.reduce((total, item) => total + (item.Gia * item.soluong), 0);
    this._total.next(total);
    const soluong = this.cartItems.reduce((soluong, item) => soluong + item.soluong, 0);
    this._soluong.next(soluong);
  }
  ChangeSoluong(itemId: number, Upadatesoluong: number): void {
    this.cartItems = this.localStorageService.getItem('giohang')?this.localStorageService.getItem('giohang'):[]
    const item = this.cartItems.find(i => i.id === itemId);
    if (item) {
      item.soluong += Upadatesoluong;
    }
    const index = this.cartItems.findIndex(v => v.id === itemId);
    this.cartItems[index] = { ...this.cartItems[index], ...item};
    this._cartItems.next(this.cartItems);
    this.localStorageService.setItem('giohang',this.cartItems)
    const total = this.cartItems.reduce((total, item) => total + (item.Gia * item.soluong), 0);
    this._total.next(total);
    const soluong = this.cartItems.reduce((soluong, item) => soluong + item.soluong, 0);
    this._soluong.next(soluong);
  }
  getCartItems() {
    this.cartItems = this.localStorageService.getItem('giohang')?this.localStorageService.getItem('giohang'):[]
    this._cartItems.next(this.cartItems);
    const soluong = this.cartItems.reduce((soluong, item) => soluong + item.soluong, 0);
    this._soluong.next(soluong);
  }
  calculateTotal() {
    this.cartItems = this.localStorageService.getItem('giohang')?this.localStorageService.getItem('giohang'):[]
    const total = this.cartItems.reduce((total, item) => total + (item.Gia * item.soluong), 0);
    this._total.next(total);
    const soluong = this.cartItems.reduce((soluong, item) => soluong + item.soluong, 0);
    this._soluong.next(soluong);
  }
}
